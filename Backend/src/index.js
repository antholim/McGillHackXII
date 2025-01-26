import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {casperService} from "./serviceInit.js";
import User from "./models/user.js";
import bcrypt from "bcrypt";
import {connectToMongoDB} from "./utils.js"
import jwt from "jsonwebtoken";

dotenv.config();


const PORT = 3000;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());

await connectToMongoDB();
app.post('/verifyToken', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        res.status(200).json({ message: 'Success' });
    });
});
app.post('/user-input', async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

        console.log(decoded);

        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // Return the response
        }

        const response = await casperService.sendUserInput(req.body.userInput);

        return res.status(200).json({ message: 'Success', casper_response: response }); // Return the response
    } catch (err) {
        console.error(err);
        
        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Failed to authenticate token' }); // Return the response
        }

        return res.status(500).json({ message: 'Internal server error' }); // Catch-all for other errors
    }
});

app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        //If username exists
        const existingUser = await User.findOne({ name: req.body.email });
        if (existingUser) {
            res.status(409).send("Email already exists");
        }
        const user = await User.create({
            email: req.body.email,
            password: hashedPassword,
        });
        res.status(200).json({ status: "Success" });
    } catch (err) {
        if (err?.keyPattern?.email) {
            res.status(409).send("Email already exists");
        }
        res.status(502).send("Internal server error")
    }
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ $or: [{ email: email }, { name: email }] });
        if (!user) {
            return res.status(404).send("Account doesn't exist");
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).send("Invalid credentials");
        }
        if (!user?.has2FA) {
            const payload = {
                _id: user._id,
                email: user.email,
                iat: Math.floor(Date.now() / 1000) - 30
            }
            const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
            res.status(200).json({ accessToken: accessToken, message: "Success" });
        }
    } catch (err) {
        res.status(401).send("An error occurred");
    }
});

app.listen(3000, function() {
    
  console.log('Listening on http://localhost:3000');
});