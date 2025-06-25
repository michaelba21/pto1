import express, { Request, Response, NextFunction } from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors"; // Added CORS support
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

dotenv.config();

const app = express();
///////////////
// In your server/index.ts

// Security and middleware setup
app.use(cors({
  origin: process.env.NODE_ENV === 'development' 
    ? ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'] 
    : process.env.PRODUCTION_URL,
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enhanced request logger middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, path } = req;
  let responseBody: unknown;

  const originalJson = res.json;
  res.json = function(body) {
    responseBody = body;
    return originalJson.call(this, body);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (path.startsWith('/api')) {
      const logEntry = {
        method,
        path,
        status: res.statusCode,
        duration: `${duration}ms`,
        ...(responseBody && { response: responseBody })
      };
      log(JSON.stringify(logEntry, null, 2));
    }
  });

  next();
});

// Database connection would go here
async function initializeServer() {
  try {
    const server = http.createServer(app);
    
    // Route registration
    await registerRoutes(app);

    // Error handling middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error('[ERROR]', err);
      
      if (res.headersSent) {
        return next(err);
      }

      const status = 'status' in err ? (err as any).status : 500;
      res.status(status).json({
        error: {
          message: err.message || 'Internal Server Error',
          ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
      });
    });

    // Vite setup for development
    if (process.env.NODE_ENV === 'development') {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    const PORT = process.env.PORT || 5000; // Make sure this matches your client's target
    const HOST = process.env.HOST || '0.0.0.0'; // Changed from 'localhost' to accept external connections
    
    server.listen(Number(PORT), HOST, () => {
      console.log(`Server running on http://${HOST}:${PORT}`);
    });
    

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
initializeServer();