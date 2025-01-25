import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export default class UserService {
    EnvService;
    constructor(EnvService) {
        this.EnvService = EnvService;
    }
    /**
     * Method to register a user and store in database
     * 
     * @param email 
     * @param password 
     * @returns {
     *   status: number,
     *   message: string,
     *   accessToken?: string
     * }
     */
    async createToken(payload, secret, expiresIn) {
        return jwt.sign(payload, secret, { expiresIn: expiresIn });
    }
}