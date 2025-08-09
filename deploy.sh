#!/bin/bash

# Exit on error
set -e

# Build the project
npm run build

# Create a CNAME file
echo "2122grapeave.mavgo.com" > dist/CNAME

# Deploy to GitHub Pages
gh-pages -d dist
