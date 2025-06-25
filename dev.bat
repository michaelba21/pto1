@echo off
set NODE_ENV=development
concurrently "npm run dev:server" "npm run dev:client"
