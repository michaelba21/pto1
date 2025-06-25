// Simple test script to check email configuration
require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('Testing email configuration...');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'SET' : 'NOT SET');

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function testEmail() {
  try {
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully!');
    
    console.log('Sending test email...');
    const result = await transporter.sendMail({
      from: `"Test Email" <${process.env.SMTP_USER}>`,
      to: 'michaelba21@yahoo.com',
      subject: 'Test Email from Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify that the email configuration is working correctly.</p>
        <p>If you receive this email, the setup is working!</p>
        <p>Sent at: ${new Date().toISOString()}</p>
      `,
    });
    
    console.log('Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    
  } catch (error) {
    console.error('Email test failed:', error);
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check your Yahoo app password.');
    }
  }
}

testEmail();