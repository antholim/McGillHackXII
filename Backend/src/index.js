import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {casperService} from "./serviceInit.js";

dotenv.config();


const PORT = 3000;
const app = express();

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your React app
    credentials: true, // Allow credentials (cookies)
}));

app.use(express.json());

app.post('/user-input', async (req, res) => {
    const response = await casperService.sendUserInput(req.body.userInput);
    res.send(JSON.stringify(response));
});

app.listen(3000, function() {
    console.log(process.env.SECRET);
    
  console.log('Listening on http://localhost:3000');
});