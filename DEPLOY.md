# Deploying the Website to Cloudflare Pages

This document provides instructions on how to build and deploy the website to Cloudflare Pages.

## 1. Install Wrangler

If you haven't already, install the Cloudflare Wrangler CLI:

```bash
npm install -g wrangler
```

## 2. Login to Wrangler

Authenticate Wrangler with your Cloudflare account:

```bash
wrangler login
```

## 3. Configure Your Project

This project is configured for Cloudflare Pages using the `wrangler.toml` file. It is set up to deploy the contents of the `.` directory, which is where the output of the build process is located.

## 4. Build and Deploy

You can use the `npm run deploy` script to build and deploy the website to Cloudflare Pages.

```bash
npm run deploy
```