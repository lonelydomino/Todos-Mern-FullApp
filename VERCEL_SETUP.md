# Vercel Deployment Setup

## Issue: Vercel Not Showing Client Directory

If Vercel isn't detecting your `client` directory, follow these steps:

---

## Solution 1: Configure Root Directory in Vercel Dashboard (Recommended)

1. **Go to your project in Vercel dashboard**
2. Click on **"Settings"** tab
3. Scroll down to **"General"** section
4. Find **"Root Directory"** setting
5. Click **"Edit"**
6. Enter: `client`
7. Click **"Save"**
8. Vercel will automatically redeploy

---

## Solution 2: Use Vercel CLI (Alternative)

If you prefer using the command line:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to client directory**:
   ```bash
   cd client
   ```

3. **Deploy from client directory**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

---

## Solution 3: Manual Configuration

When importing your project in Vercel:

1. **Import Project**:
   - Click "Add New" → "Project"
   - Select your GitHub repository

2. **Configure Project**:
   - **Framework Preset**: `Create React App` (or `Other`)
   - **Root Directory**: Click "Override" and enter `client`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

3. **Environment Variables**:
   - Add `REACT_APP_API_URL` = your backend URL
     - Example: `https://mern-todo-api.onrender.com`

4. **Deploy**: Click "Deploy"

---

## Important Settings for Vercel

### Root Directory
```
client
```

### Build Command
```
npm run build
```

### Output Directory
```
build
```

### Install Command
```
npm install
```

### Framework Preset
```
Create React App
```

---

## Environment Variables

Don't forget to add:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

**Where to add:**
1. Go to your project in Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Add the variable
4. Redeploy

---

## Troubleshooting

### "Cannot find package.json"
- ✅ Make sure Root Directory is set to `client`
- ✅ Verify `client/package.json` exists

### "Build failed"
- ✅ Check Root Directory is `client` (not root)
- ✅ Verify all dependencies are in `client/package.json`
- ✅ Check build logs for specific errors

### "Blank page after deployment"
- ✅ Check `REACT_APP_API_URL` is set correctly
- ✅ Open browser console (F12) for errors
- ✅ Verify backend URL is accessible

### "Vercel still not showing client directory"
- ✅ Try Solution 1 (Root Directory setting)
- ✅ Or use Solution 2 (CLI from client directory)
- ✅ Make sure you're in the correct repository

---

## Quick Checklist

- [ ] Root Directory set to `client` in Vercel settings
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `build`
- [ ] Environment variable `REACT_APP_API_URL` added
- [ ] Backend is deployed and accessible
- [ ] Code pushed to GitHub

---

## After Deployment

1. Visit your Vercel URL (e.g., `https://your-app.vercel.app`)
2. Test creating a todo
3. Check browser console for any errors
4. Verify API calls are going to your backend

