# Environment Variables for Deployment

## Backend (API) - Render Web Service

Add these environment variables in Render dashboard:

### Required:
```
MONGODB_URI=mongodb+srv://lonelydomino:Kiwi2023@cluster0.jycrvss.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0
```

### Optional (but recommended):
```
NODE_ENV=production
```

**Note:** Replace `Kiwi2023` with your actual MongoDB Atlas password if it's different.

---

## Frontend (Client) - Render Static Site

Add this environment variable in Render dashboard:

### Required:
```
REACT_APP_API_URL=https://your-backend-name.onrender.com
```

**Important:** 
- Replace `your-backend-name` with your actual backend service name
- Use `https://` (not `http://`)
- No trailing slash at the end
- Example: `https://mern-todo-api.onrender.com`

---

## How to Add Environment Variables in Render

### For Backend (Web Service):
1. Go to your service in Render dashboard
2. Click on **"Environment"** tab (left sidebar)
3. Click **"Add Environment Variable"**
4. Enter the **Key** and **Value**
5. Click **"Save Changes"**
6. Service will automatically redeploy

### For Frontend (Static Site):
1. Go to your static site in Render dashboard
2. Click on **"Environment"** tab (left sidebar)
3. Click **"Add Environment Variable"**
4. Enter the **Key** and **Value**
5. Click **"Save Changes"**
6. Site will automatically rebuild and redeploy

---

## Example Values

### Backend Environment Variables:
```
MONGODB_URI=mongodb+srv://lonelydomino:Kiwi2023@cluster0.jycrvss.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
```

### Frontend Environment Variables:
```
REACT_APP_API_URL=https://mern-todo-api.onrender.com
```

*(Replace with your actual backend URL after deploying)*

---

## Quick Copy-Paste for Render

### Backend:
```
Key: MONGODB_URI
Value: mongodb+srv://lonelydomino:Kiwi2023@cluster0.jycrvss.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0
```

```
Key: NODE_ENV
Value: production
```

### Frontend:
```
Key: REACT_APP_API_URL
Value: https://your-backend-name.onrender.com
```

---

## Verification

After setting environment variables:

**Backend:**
- Check logs to see "Connected to DB!" message
- Visit `https://your-backend.onrender.com/todos` - should return `[]`

**Frontend:**
- Check build logs - should build successfully
- Visit your frontend URL - should load without errors
- Open browser console (F12) - no API connection errors

