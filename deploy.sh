#!/bin/bash
# Deploy script for Vercel

echo "Adding files to git..."
git add .

echo "Committing changes..."
git commit -m "Fix React version compatibility and dependency resolution for TinaCMS"

echo "Pushing to GitHub..."
git push origin main

echo "Deployment triggered!"
