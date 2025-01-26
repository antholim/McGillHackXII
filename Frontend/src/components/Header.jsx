import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import TopRightMenu from './TopRightMenu';
import "./Header.css"; // Import the CSS file
import axios from "axios"

export default function Header() {
    const { isAuthenticated } = useAuth0();

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
            <TopRightMenu />
        </div>
    );
}