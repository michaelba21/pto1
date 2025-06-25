#!/usr/bin/env node

// Simple startup script to handle common issues
console.log('Starting NeuroStack Solutions website...');

// Check if we're in the right directory
const fs = require('fs');
const path = require('path');

if (!fs.existsSync('./package.json')) {
  console.error('❌ Error: package.json not found!');
  console.log('Make sure you are in the project directory');
  process.exit(1);
}

// Check for .env file and create if needed
if (!fs.existsSync('./.env')) {
  console.log('Creating .env file...');
  fs.writeFileSync('./.env', 'NODE_ENV=development\n# Add DATABASE_URL here if you have a database\n');
}

console.log('✅ Environment setup complete');
console.log('📦 Installing dependencies...');

// Run npm install
const { spawn } = require('child_process');

const npmInstall = spawn('npm', ['install'], {
  stdio: 'inherit',
  shell: true
});

npmInstall.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Dependencies installed successfully');
    console.log('🚀 Starting development server...');
    
    // Start the dev server
    const devServer = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      shell: true
    });
    
    devServer.on('close', (devCode) => {
      console.log(`Dev server exited with code ${devCode}`);
    });
  } else {
    console.error(`❌ npm install failed with code ${code}`);
    process.exit(1);
  }
});