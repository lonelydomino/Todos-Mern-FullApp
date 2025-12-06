# Step-by-Step Render Deployment Guide

This guide will walk you through deploying your MERN Todo App to Render.

## Prerequisites

✅ Code pushed to GitHub  
✅ MongoDB Atlas account set up  
✅ MongoDB connection string ready

---

## Step 1: Prepare Your Code

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

---

## Step 2: Deploy Backend (API) to Render

### 2.1 Create Render Account
1. Go to https://render.com
2. Sign up (you can use GitHub to sign in)

### 2.2 Create New Web Service
1. Click the **"New +"** button (top right)
2. Select **"Web Service"**
3. Connect your GitHub account if prompted
4. Select your repository from the list

### 2.3 Configure Backend Service

Fill in the following details:

**Basic Settings:**
- **Name**: `mern-todo-api` (or your preferred name)
- **Region**: Choose closest to you (e.g., `Oregon (US West)`)
- **Branch**: `main` (or your default branch)
- **Root Directory**: `api` ⚠️ **Important!**
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: `Free` (or choose a paid plan)

**Environment Variables:**
Click "Add Environment Variable" and add:

1. **MONGODB_URI**
   - Key: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
     ```
     mongodb+srv://lonelydomino:Kiwi2023@cluster0.jycrvss.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0
     ```
   - ⚠️ Replace `Kiwi2023` with your actual password if different

2. **NODE_ENV** (optional but recommended)
   - Key: `NODE_ENV`
   - Value: `production`

### 2.4 Deploy
1. Click **"Create Web Service"**
2. Render will start building and deploying
3. Wait for deployment to complete (usually 2-5 minutes)
4. **Note your backend URL**: It will be something like:
   ```
   https://mern-todo-api.onrender.com
   ```
   ⚠️ **Save this URL - you'll need it for the frontend!**

### 2.5 Test Backend
Open your backend URL in browser:
```
https://your-backend-name.onrender.com/todos
```
You should see `[]` (empty array) - this means it's working! ✅

---

## Step 3: Deploy Frontend (Client) to Render

### 3.1 Create New Static Site
1. In Render dashboard, click **"New +"**
2. Select **"Static Site"**
3. Connect your GitHub account if needed
4. Select the same repository

### 3.2 Configure Frontend Service

Fill in the following:

**Basic Settings:**
- **Name**: `mern-todo-client` (or your preferred name)
- **Branch**: `main`
- **Root Directory**: `client` ⚠️ **Important!**
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`
- **Plan**: `Free`

**Environment Variables:**
Click "Add Environment Variable" and add:

1. **REACT_APP_API_URL**
   - Key: `REACT_APP_API_URL`
   - Value: Your backend URL from Step 2.4
     ```
     https://mern-todo-api.onrender.com
     ```
   - ⚠️ Make sure to use `https://` and no trailing slash

### 3.3 Deploy
1. Click **"Create Static Site"**
2. Render will build and deploy your React app
3. Wait for deployment (usually 3-5 minutes)
4. **Your app is live!** 🎉
   - URL will be something like: `https://mern-todo-client.onrender.com`

---

## Step 4: Configure MongoDB Atlas

Before your app works fully, you need to whitelist Render's IPs:

1. Go to https://cloud.mongodb.com
2. Navigate to **Network Access** (left sidebar)
3. Click **"Add IP Address"**
4. Click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
   - Or add specific Render IPs if you prefer
5. Click **"Confirm"**

⚠️ **Important**: This allows any IP to connect. For production, consider restricting to Render's IP ranges, but for free tier this is fine.

---

## Step 5: Test Your Deployed App

1. Visit your frontend URL: `https://mern-todo-client.onrender.com`
2. Try creating a todo
3. Try completing a todo
4. Try deleting a todo

If everything works, you're done! ✅

---

## Troubleshooting

### Backend Issues

**"Cannot connect to MongoDB"**
- ✅ Check MongoDB Atlas Network Access (Step 4)
- ✅ Verify `MONGODB_URI` environment variable is correct
- ✅ Check MongoDB Atlas cluster is running

**"Build failed"**
- ✅ Check Root Directory is set to `api`
- ✅ Verify `package.json` exists in `api` folder
- ✅ Check build logs in Render dashboard

**"Application error"**
- ✅ Check logs in Render dashboard (Logs tab)
- ✅ Verify all environment variables are set
- ✅ Check MongoDB connection string format

### Frontend Issues

**"Blank page"**
- ✅ Open browser console (F12) and check for errors
- ✅ Verify `REACT_APP_API_URL` is set correctly
- ✅ Check that backend URL is accessible

**"API calls failing"**
- ✅ Verify `REACT_APP_API_URL` matches your backend URL exactly
- ✅ Check CORS is enabled in backend (already done in `server.js`)
- ✅ Test backend URL directly: `https://your-backend.onrender.com/todos`

**"Build failed"**
- ✅ Check Root Directory is set to `client`
- ✅ Verify `package.json` exists in `client` folder
- ✅ Check build logs for specific errors

---

## Render Free Tier Limitations

⚠️ **Important Notes:**
- **Spins down after 15 minutes of inactivity** - first request after spin-down takes ~30 seconds
- **750 hours/month free** - enough for most personal projects
- **Auto-deploys on git push** - any push to main branch triggers redeploy

---

## Updating Your App

To update your deployed app:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update app"
   git push origin main
   ```
3. Render will automatically detect the push and redeploy
4. Wait 2-5 minutes for deployment to complete

---

## Environment Variables Reference

### Backend (Web Service)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
```

### Frontend (Static Site)
```
REACT_APP_API_URL=https://your-backend-name.onrender.com
```

---

## Quick Checklist

Before deploying:
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas cluster running
- [ ] MongoDB connection string ready
- [ ] Render account created

Backend deployment:
- [ ] Root Directory: `api`
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Environment variable: `MONGODB_URI` set
- [ ] Backend URL saved

Frontend deployment:
- [ ] Root Directory: `client`
- [ ] Build Command: `npm install && npm run build`
- [ ] Publish Directory: `build`
- [ ] Environment variable: `REACT_APP_API_URL` set to backend URL

MongoDB Atlas:
- [ ] Network Access: `0.0.0.0/0` added (or Render IPs)

Testing:
- [ ] Backend URL returns `[]` when visiting `/todos`
- [ ] Frontend loads without errors
- [ ] Can create todos
- [ ] Can complete todos
- [ ] Can delete todos

---

## Need Help?

- Render Docs: https://render.com/docs
- Render Support: https://render.com/support
- Check deployment logs in Render dashboard

