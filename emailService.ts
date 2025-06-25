import nodemailer from 'nodemailer';
import type { ContactSubmission } from '@shared/schema';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isConfigured = false;

  constructor() {
    this.setupTransporter();
  }

  private setupTransporter() {
    try {
      // For development, you can use Gmail SMTP or other email services
      // For production, consider using services like SendGrid, AWS SES, etc.
      
      const emailConfig: EmailConfig = {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER || '',
          pass: process.env.SMTP_PASS || '', // Use app password for Gmail
        },
      };

      // Only create transporter if credentials are provided
      if (emailConfig.auth.user && emailConfig.auth.pass) {
        this.transporter = nodemailer.createTransporter(emailConfig);
        this.isConfigured = true;
        console.log('Email service configured successfully');
      } else {
        console.warn('Email service not configured - missing SMTP credentials');
        console.warn('Add SMTP_USER and SMTP_PASS to your .env file to enable email functionality');
      }
    } catch (error) {
      console.error('Failed to setup email transporter:', error);
    }
  }

  async sendContactNotification(submission: ContactSubmission): Promise<boolean> {
    if (!this.isConfigured || !this.transporter) {
      console.log('Email not configured, skipping email send');
      return false;
    }

    try {
      const serviceLabels: Record<string, string> = {
        'fullstack': 'Full-Stack Development',
        'api': 'API Development & Integration',
        'security': 'Cybersecurity Support',
        'ai': 'AI-Powered Automation',
        'devops': 'DevOps & Hosting',
        'consultation': 'Technical Consultation'
      };

      const budgetLabels: Record<string, string> = {
        'under-5k': 'Under €5,000',
        '5k-15k': '€5,000 - €15,000',
        '15k-30k': '€15,000 - €30,000',
        '30k-plus': '€30,000+',
        'discuss': "Let's discuss"
      };

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              🚀 New Contact Form Submission - NeuroStack Solutions
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${submission.name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${submission.email}" style="color: #2563eb;">${submission.email}</a></p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Project Details</h3>
              <p style="margin: 8px 0;"><strong>Service Needed:</strong> ${serviceLabels[submission.service] || submission.service}</p>
              ${submission.budget ? `<p style="margin: 8px 0;"><strong>Budget Range:</strong> ${budgetLabels[submission.budget] || submission.budget}</p>` : ''}
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 15px;">Message</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
                ${submission.message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>Submitted on: ${new Date(submission.createdAt).toLocaleString()}</p>
              <p style="margin-top: 10px;">
                <strong>Next Steps:</strong> Reply to this email or contact ${submission.name} directly at 
                <a href="mailto:${submission.email}" style="color: #2563eb;">${submission.email}</a>
              </p>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: `"NeuroStack Contact Form" <${process.env.SMTP_USER}>`,
        to: 'michaelba21@yahoo.com', // Your email address
        subject: `🚀 New Contact: ${submission.name} - ${serviceLabels[submission.service] || submission.service}`,
        html: emailHtml,
        replyTo: submission.email, // Allow direct reply to the client
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Contact notification email sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Failed to send contact notification email:', error);
      return false;
    }
  }

  async sendAutoReply(submission: ContactSubmission): Promise<boolean> {
    if (!this.isConfigured || !this.transporter) {
      return false;
    }

    try {
      const autoReplyHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">
              Thank you for contacting NeuroStack Solutions! 🚀
            </h2>
            
            <p style="margin-bottom: 15px;">Hi ${submission.name},</p>
            
            <p style="margin-bottom: 15px;">
              Thank you for reaching out! I've received your message about <strong>${submission.service}</strong> 
              and I'm excited to learn more about your project.
            </p>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">I'll review your project details carefully</li>
                <li style="margin-bottom: 8px;">You'll receive a personalized response within 24 hours</li>
                <li style="margin-bottom: 8px;">We can schedule a call to discuss your requirements in detail</li>
              </ul>
            </div>
            
            <p style="margin-bottom: 15px;">
              In the meantime, feel free to check out my 
              <a href="https://www.linkedin.com/in/michaelbarak/" style="color: #2563eb;">LinkedIn profile</a> 
              to see some of my recent work and client testimonials.
            </p>
            
            <p style="margin-bottom: 20px;">
              Looking forward to potentially working together!
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin-bottom: 5px;"><strong>Michael Barak</strong></p>
              <p style="color: #6b7280; margin-bottom: 5px;">Full-Stack Developer & AI Solutions Specialist</p>
              <p style="color: #6b7280; margin-bottom: 5px;">📧 michaelba21@yahoo.com</p>
              <p style="color: #6b7280;">🌍 Based in the Netherlands</p>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: `"Michael Barak - NeuroStack Solutions" <${process.env.SMTP_USER}>`,
        to: submission.email,
        subject: `Thank you for contacting NeuroStack Solutions, ${submission.name}! 🚀`,
        html: autoReplyHtml,
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Auto-reply email sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Failed to send auto-reply email:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();