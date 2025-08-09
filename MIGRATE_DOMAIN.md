# Migrating Your Domain from Squarespace to Cloudflare

This guide outlines the steps to migrate your domain from the Squarespace registrar to Cloudflare.

## 1. Unlock Your Domain in Squarespace

1.  Log in to your Squarespace account.
2.  Go to the **Domains** panel.
3.  Click the domain you want to transfer.
4.  Scroll down and uncheck the **Lock Domain** option.

## 2. Get the Authorization Code from Squarespace

1.  In the same **Domains** panel in Squarespace, click the **Send Transfer Authorization Code** button.
2.  This will send an email with the authorization code to the registered domain contact.

## 3. Add Your Domain to Cloudflare

1.  Log in to your Cloudflare account.
2.  Click the **Add a Site** button.
3.  Enter your domain name (`mavgo.com`) and click **Add Site**.
4.  Select a plan and click **Continue**.
5.  Cloudflare will scan your existing DNS records. Review them and click **Continue**.

## 4. Initiate the Transfer in Cloudflare

1.  In the Cloudflare dashboard, go to the **Domain Registration** section.
2.  Click the **Transfer** button.
3.  Enter the authorization code you received from Squarespace.
4.  Confirm the transfer and pay for the transfer (this will extend your domain registration by one year).

## 5. Approve the Transfer

1.  You will receive an email from Squarespace to approve the transfer. Click the link in the email to approve it.
2.  The transfer will take a few days to complete.

## 6. Update Your DNS Records in Cloudflare

Once the transfer is complete, you will need to update your DNS records in Cloudflare to point to your GitHub Pages site.

1.  In the Cloudflare dashboard, go to the **DNS** section.
2.  Create a `CNAME` record with the following details:
    *   **Type:** `CNAME`
    *   **Name:** `2122grapeave`
    *   **Target:** `<your-github-username>.github.io`
    *   **TTL:** Auto

Replace `<your-github-username>` with your actual GitHub username.
