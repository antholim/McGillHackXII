import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault() // Prevent default form submission
        try {
            const response = await axios.post("http://localhost:3000/login", {email,password});
            console.log(response)
            if (response?.status === 200) {
                localStorage.setItem('token', response?.data?.accessToken); // Store token in local storage
                console.log("Logged in successfully");
                navigate('/trade'); 
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
        <div>
            <form onSubmit={handleSubmit} method='post'>

                <h2>Log in</h2>

                <input type='text' placeholder='Email or Username' value={email}
                       onChange={e => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button>Log in</button>
            </form>
        </div>

    )
}

export default Login;