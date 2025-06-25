import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentUserId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      budget: insertSubmission.budget || null,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export class DatabaseStorage implements IStorage {
  private db: any;
  private isConnected: boolean = false;

  constructor() {
    this.initializeDatabase();
  }

  private async initializeDatabase() {
    try {
      const { db } = await import("./db");
      this.db = db;
      this.isConnected = true;
      console.log("Database connected successfully");
    } catch (error: any) {
      console.warn("Database connection failed, using memory storage:", error?.message || 'Unknown error');
      this.isConnected = false;
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    if (!this.isConnected) return undefined;
    try {
      const [user] = await this.db.select().from(users).where(eq(users.id, id));
      return user || undefined;
    } catch (error) {
      console.error("Database error in getUser:", error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!this.isConnected) return undefined;
    try {
      const [user] = await this.db.select().from(users).where(eq(users.username, username));
      return user || undefined;
    } catch (error) {
      console.error("Database error in getUserByUsername:", error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!this.isConnected) {
      throw new Error("Database not available");
    }
    try {
      const [user] = await this.db
        .insert(users)
        .values(insertUser)
        .returning();
      return user;
    } catch (error) {
      console.error("Database error in createUser:", error);
      throw error;
    }
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    if (!this.isConnected) {
      throw new Error("Database not available");
    }
    try {
      const [submission] = await this.db
        .insert(contactSubmissions)
        .values(insertSubmission)
        .returning();
      return submission;
    } catch (error) {
      console.error("Database error in createContactSubmission:", error);
      throw error;
    }
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    if (!this.isConnected) return [];
    try {
      return await this.db
        .select()
        .from(contactSubmissions)
        .orderBy(contactSubmissions.createdAt);
    } catch (error) {
      console.error("Database error in getAllContactSubmissions:", error);
      return [];
    }
  }
}

// Use memory storage by default, switch to database if available
const createStorage = (): IStorage => {
  if (process.env.DATABASE_URL && process.env.DATABASE_URL !== "postgresql://localhost:5432/neurostack") {
    return new DatabaseStorage();
  }
  console.log("Using memory storage for development");
  return new MemStorage();
};

export const storage = createStorage();
