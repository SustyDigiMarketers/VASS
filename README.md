# VASS Software and Solutions - Web Application

This project is a modern, professional website for VASS Software and Solutions Pvt. Ltd. It is built with React and TypeScript and uses Vite for bundling.

## Deployment to GitHub Pages with a Custom Domain

This project is configured for automated deployment to GitHub Pages using GitHub Actions. Follow these steps carefully to ensure a successful deployment.

### Step 1: Vite Configuration for Custom Domain

For your site to load correctly at `vass.sustydigimarketers.com`, the `base` path in `vite.config.ts` **must be set to `'/'`**. This has already been configured for you.

```javascript
// vite.config.ts
export default defineConfig({
  // ...
  base: '/', // Correct for custom domain
});
```

### Step 2: Configure GitHub Repository Settings (Do this first!)

Before you push your code, you must configure your repository to use GitHub Actions for deployment. This prevents the "Not Found" error during the first deployment.

1.  Navigate to your GitHub repository: `SustyDigiMarketers/VASS`.
2.  Go to **Settings** > **Pages**.
3.  Under **Build and deployment**, change the **Source** to **GitHub Actions**.
4.  In the **Custom domain** section, enter `vass.sustydigimarketers.com` and click **Save**. GitHub will provide the DNS records you need.

### Step 3: Configure Your DNS Provider

1.  Go to your domain provider's website (e.g., Cloudflare, GoDaddy).
2.  Add the DNS records provided by GitHub in the previous step. You will typically need to add four `A` records pointing to GitHub's IP addresses and a `CNAME` record if you're using a subdomain.

### Step 4: Push Your Code to GitHub

Now that your repository is configured, push your code. This will trigger the GitHub Actions workflow to build and deploy your site.

```bash
git add .
git commit -m "Ready for deployment"
# Ensure your remote is set correctly
git remote set-url origin https://github.com/SustyDigiMarketers/VASS.git
git push origin main
```

### Step 5: Verify Deployment

1.  In your GitHub repository, go to the **Actions** tab.
2.  You should see a workflow running. It will take a few minutes to complete.
3.  Once the workflow is successful, your site will be live at `vass.sustydigimarketers.com`. DNS changes can take some time to propagate, so you may need to wait a few minutes.