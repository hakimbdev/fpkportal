# MAAUN Website

This is the website for MAAUN (Maryam Abacha American University of Nigeria) built with Next.js, React, Tailwind CSS, and Firebase.

## Deployment to Netlify

### Automatic Deployment

1. **Connect to Netlify**:
   - Create a Netlify account if you don't already have one at [netlify.com](https://www.netlify.com/)
   - Click "New site from Git"
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify and select your repository

2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Show advanced" and add the environment variables from your `.env.production` file
   
3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Manual Deployment

1. **Build the site locally**:
   ```bash
   npm run build
   ```

2. **Deploy using Netlify CLI**:
   ```bash
   # Install Netlify CLI if you haven't already
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy the site
   netlify deploy --prod
   ```

## Troubleshooting Firestore Connectivity

If you're experiencing issues with Firestore connectivity:

1. Visit `/debug/firebase` route on your deployed site 
2. Click "Run All Tests" to check if Firebase connectivity works
3. Check for any error messages in the browser console
4. Make sure your Firebase security rules allow read/write operations

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.
