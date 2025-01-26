import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import TopRightMenu from './TopRightMenu';
import "./Header.css";
import axios from "axios"

export default function Header() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3000/profile', {
                withCredentials: true,
            });
            console.log(response.data);
            console.log("DONE")
        } catch (error) {
            console.error('Error fetching profile:', error.message);
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="header-container">
            <div className="logo-container" onClick={handleLogoClick}>
                <img src="/Logo.png" alt="Logo" className="logo" />
            </div>
            <TopRightMenu />
        </div>
    );
}