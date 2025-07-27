# Deployment Guide

This guide will help you deploy your portfolio to various free hosting platforms.

## GitHub Pages (Recommended)

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

3. **Your site will be available at**: `https://yourusername.github.io/your-repo-name`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## Netlify

1. **Connect to GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Choose your repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Your site will be available at**: `https://your-site-name.netlify.app`

## Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect to your GitHub account

4. **Your site will be available at**: `https://your-project-name.vercel.app`

## Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

4. **Configure**
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub Actions: `Yes` (optional)

5. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## Surge.sh

1. **Install Surge**
   ```bash
   npm install -g surge
   ```

2. **Build and deploy**
   ```bash
   npm run build
   surge dist
   ```

3. **Follow the prompts** to create an account and choose a domain

## Troubleshooting

### Common Issues

1. **404 errors on refresh**
   - This is normal for SPAs
   - The `_redirects` file (Netlify) and `vercel.json` (Vercel) handle this
   - For GitHub Pages, the base path in `vite.config.ts` handles this

2. **Assets not loading**
   - Check that the `base: "./"` is set in `vite.config.ts`
   - Ensure all image paths are relative

3. **Build errors**
   - Make sure all dependencies are installed: `npm install`
   - Check for TypeScript errors: `npm run lint`
   - Try building locally: `npm run build`

### Environment Variables

If you need environment variables:

1. **For Netlify**: Add them in Site settings > Environment variables
2. **For Vercel**: Add them in Project settings > Environment variables
3. **For GitHub Pages**: Use repository secrets in the workflow

### Custom Domain

1. **GitHub Pages**: Settings > Pages > Custom domain
2. **Netlify**: Site settings > Domain management
3. **Vercel**: Project settings > Domains

## Performance Tips

1. **Optimize images**: Use WebP format and compress images
2. **Enable compression**: Most hosting platforms do this automatically
3. **Use CDN**: All platforms above include CDN
4. **Minimize bundle size**: The build process already does this

## Security

1. **HTTPS**: All platforms above provide HTTPS by default
2. **Security headers**: Add them in your hosting platform settings
3. **Environment variables**: Never commit sensitive data to your repository

## Monitoring

1. **Analytics**: Add Google Analytics or similar
2. **Error tracking**: Consider Sentry for error monitoring
3. **Performance**: Use Lighthouse for performance audits

## Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Look at the build logs in your hosting platform
3. Test locally with `npm run build && npm run preview`
4. Open an issue on GitHub with detailed error information 