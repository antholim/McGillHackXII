import axios from "axios"
import OpenAI from "openai";
import {promptCorrector} from "../data/prompt.js";
import dotenv from "dotenv";
dotenv.config();
export default class CasperService {
    constructor() {
        this.url = 'https://api.openai.com/v1/chat/completions';

        this.openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });
        this.API_KEY = process.env.OPEN_AI_KEY;

    }    
    async sendUserInput(userInput) {
        try {
            const response = await axios.post(
                this.url,
                {
                    model: "gpt-3.5-turbo", // Specify the model you want
                    messages: [
                        { role: "system", content: promptCorrector },
                        { role: "user", content: userInput }
                    ],
                    max_tokens: 100
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.API_KEY}`
                    }
                }
            );
            return response.data.choices[0].message.content;
    
        } catch (error) {
            console.error("Error fetching data from OpenAI:", error.response?.data || error.message);
        }
    }
}