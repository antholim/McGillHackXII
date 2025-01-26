import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import Logout from './Logout';
import TopRightMenu from './TopRightMenu';
import "./Header.css"; // Import the CSS file
import LogoutButton from "./Logout";
import axios from "axios"

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=> {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, [isAuthenticated])
    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3000/profile', {
                withCredentials: true, // Include cookies or credentials in the request
            });
            console.log(response.data);
            console.log("DONE")
        } catch (error) {
            console.error('Error fetching profile:', error.message);
        }
    };

    return (
        <div className="header-container">
            <Link to="/" className="logo-container">
                <img src="/avgh5n121.webp" alt="Logo" className="logo" />
            </Link>
            <div className="auth-buttons">
                {isAuthenticated ? <Logout setIsAuthenticated={setIsAuthenticated}/> : <LoginButton/>}
            </div>
            <TopRightMenu />
        </div>
    );
}
