# Deploying the Website to GitHub Pages

This document provides instructions on how to build and deploy the website to GitHub Pages and configure your custom domain.

## 1. Create a GitHub Repository

If you haven't already, create a new GitHub repository for this project.

## 2. Configure GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. When you push to the `main` branch, the website will be automatically built and deployed.

## 3. Configure Your Custom Domain

1.  In your repository's **Settings** page, go to the **Pages** section.
2.  Under **Custom domain**, enter `2122grapeave.mavgo.com` and click **Save**.
3.  This will create a `CNAME` file in the root of your repository with the custom domain. This is handled automatically by the GitHub Actions workflow.
4.  In your Squarespace account, go to the **DNS Settings** for your domain.
5.  Create a `CNAME` record that points `2122grapeave` to `<your-github-username>.github.io`.

## 4. Build and Deploy

You can use the `deploy.sh` script to build and deploy the website to GitHub Pages.

```bash
./deploy.sh
```
