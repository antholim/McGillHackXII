import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Register.module.css";
import axios from 'axios';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/testTaking");
        }
    }, [navigate]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:3000/register", {
                email,
                password,
            });

            if (result?.status === 200) {
                navigate("/login");
            }
        } catch (error) {
            setError(error?.response?.data);
        }
    }

    return (
        <div>
            <Header /> {/* Add Header component */}
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <h2 className={styles.title}>SIGN UP</h2>
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
                    <button className={styles.registerButton} onClick={handleSubmit}>
                        SIGN UP
                    </button>
                    <button className={styles.loginLink} onClick={() => navigate('/login')}>
                        LOGIN
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            </div>
            <Footer /> {/* Add Footer component */}
        </div>
    );
}

export default Register;