#!/bin/bash
# Start script for Next.js standalone deployment
export NODE_ENV=production
export PORT=${PORT:-3000}

# Check if running in standalone mode
if [ -f "server.js" ]; then
  echo "Starting Next.js standalone server on port $PORT..."
  node server.js
else
  echo "Error: server.js not found. This doesn't appear to be a standalone build."
  exit 1
fi
