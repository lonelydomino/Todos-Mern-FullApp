# Deployment Guide

This guide covers deploying your MERN Todo App to production.

## Prerequisites

- MongoDB Atlas account (already set up)
- GitHub account (for connecting to deployment platforms)
- Code pushed to a GitHub repository

---

## Option 1: Separate Deployments (Recommended) ⭐

This approach gives you the best performance and is free.

### Backend: Deploy to Render

1. **Sign up/Login to Render**: https://render.com

2. **Create a New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure the Service**:
   - **Name**: `mern-todo-api` (or your choice)
   - **Environment**: `Node`
   - **Build Command**: `cd api && npm install`
   - **Start Command**: `cd api && npm start`
   - **Plan**: Free

4. **Set Environment Variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
   - `PORT`: Will be automatically set by Render

5. **Deploy**: Click "Create Web Service"

6. **Note your backend URL**: e.g., `https://mern-todo-api.onrender.com`

### Frontend: Deploy to Vercel

1. **Sign up/Login to Vercel**: https://vercel.com

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure the Project**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `build`

4. **Set Environment Variables**:
   - `REACT_APP_API_URL`: Your Render backend URL (e.g., `https://mern-todo-api.onrender.com`)

5. **Deploy**: Click "Deploy"

6. **Your app will be live!** Vercel will give you a URL like `https://your-app.vercel.app`

---

## Option 2: Full-Stack on Render (Simpler)

Deploy both backend and frontend on Render using the `render.yaml` file.

1. **Sign up/Login to Render**: https://render.com

2. **Create a Blueprint**:
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`

3. **Set Environment Variables**:
   - For `mern-todo-api` service:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
   - For `mern-todo-client` service:
     - `REACT_APP_API_URL`: Your backend URL (will be something like `https://mern-todo-api.onrender.com`)

4. **Deploy**: Click "Apply"

---

## Option 3: Railway (Alternative)

Railway is another great option similar to Render.

### Backend on Railway:

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variable: `MONGODB_URI`
5. Set root directory to `api`
6. Railway auto-detects Node.js and deploys

### Frontend on Vercel/Netlify:

Same as Option 1 frontend steps above.

---

## MongoDB Atlas Configuration

Before deploying, make sure:

1. **Whitelist IP Addresses**:
   - Go to MongoDB Atlas → Network Access
   - Click "Add IP Address"
   - For Render: Add `0.0.0.0/0` (allows all IPs - okay for free tier)
   - For Vercel: Not needed (frontend doesn't connect directly)

2. **Database User**:
   - Ensure your database user has read/write permissions
   - MongoDB Atlas → Database Access → Verify user permissions

---

## Environment Variables Summary

### Backend (API):
- `MONGODB_URI`: Your MongoDB connection string
- `NODE_ENV`: `production`
- `PORT`: Usually auto-set by platform

### Frontend (Client):
- `REACT_APP_API_URL`: Your deployed backend URL

---

## Testing Your Deployment

1. **Backend**: Visit `https://your-backend-url.onrender.com/todos`
   - Should return JSON (empty array `[]` if no todos)

2. **Frontend**: Visit your frontend URL
   - Should load the React app
   - Try creating a todo to test the connection

---

## Troubleshooting

### Backend Issues:
- **Connection timeout**: Check MongoDB Atlas IP whitelist
- **CORS errors**: Already configured in `server.js`
- **Port errors**: Platform sets PORT automatically

### Frontend Issues:
- **API not connecting**: Verify `REACT_APP_API_URL` is set correctly
- **Build fails**: Check Node version compatibility
- **Blank page**: Check browser console for errors

---

## Cost

- **Render**: Free tier available (spins down after inactivity)
- **Vercel**: Free tier available (excellent for frontend)
- **Railway**: Free tier available ($5 credit/month)
- **MongoDB Atlas**: Free tier (512MB storage)

---

## Recommended Setup

For best performance and reliability:
- **Backend**: Render or Railway
- **Frontend**: Vercel (fastest CDN, best for React)

This gives you:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Auto-deploy on git push
- ✅ Great performance
- ✅ Easy to scale

