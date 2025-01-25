import express from "express"
import cors from "cors"
import pkg from "express-openid-connect"
import dotenv from "dotenv"
const { auth, requiresAuth } = pkg;
dotenv.config();

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: process.env.CLIENT_APP,
    issuerBaseURL: 'https://dev-5gexn4krbukvrimr.us.auth0.com/',
    secret: process.env.SECRET,
};
const PORT = 3000;
const app = express()
app.use(auth(config));

app.use(cors());
app.use(express.json());


// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(() => {
    console.log(`Server listening on ${PORT}`)
})