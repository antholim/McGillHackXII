import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token'); // Retrieve token from localStorage

            if (!token) {
                console.log("No token found. Redirecting to login.");
                navigate('/login');
                return;
            }

            try {
                const response = await axios.post(
                    'http://localhost:3000/verifyToken', // Replace with your actual endpoint
                    {}, // No body is required for this request
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
                        },
                    }
                );

                console.log(response);
                if (response?.status === 200) {
                    localStorage.setItem('token', response?.data?.accessToken); // Update the token in localStorage if provided
                    console.log("Logged in successfully");
                    navigate('/'); // Navigate to home page or intended route
                }

            } catch (err) {
                if (err.response?.status === 404) {
                    setError("Account doesn't exist");
                } else if (err.response?.status === 401) {
                    setError("Invalid credentials");
                } else {
                    setError("Something went wrong");
                }
                console.error("Error verifying token:", err);
            }
        };

        verifyToken(); // Call the async function
    }, [navigate]); // Add `navigate` as a dependency
    async function handleSubmit(e) {
        e.preventDefault() // Prevent default form submission
        try {
            const response = await axios.post("http://localhost:3000/login", {email,password});
            console.log(response)
            if (response?.status === 200) {
                localStorage.setItem('token', response?.data?.accessToken); // Store token in local storage
                console.log("Logged in successfully");
                navigate('/'); 
                //Check if has 2FA
                console.log(response)
            }
        } catch (err) {
            if (err.response.status === 404) {
                setError("Account doesn't exist");
            } else if (err.response.status === 401) {
                setError("Invalid credentials");
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.loginButton} onClick={handleSubmit}>
                    Login
                </button>
            </div>
        </div>
    );
 }
 export default Login;
