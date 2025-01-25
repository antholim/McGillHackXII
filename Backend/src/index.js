import express from "express";
import cors from "cors";
import pkg from "express-openid-connect";
import dotenv from "dotenv";
const { auth, requiresAuth } = pkg;

dotenv.config();

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: process.env.CLIENT_APP,
    issuerBaseURL: 'https://dev-5gexn4krbukvrimr.us.auth0.com',
    secret: process.env.SECRET,
};

const PORT = 3000;
const app = express();

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your React app
    credentials: true, // Allow credentials (cookies)
}));

app.use(express.json());
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get('/', requiresAuth(), (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(3000, function() {
    console.log(process.env.SECRET);
    
  console.log('Listening on http://localhost:3000');
});