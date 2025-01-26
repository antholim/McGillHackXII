import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import Logout from './Logout';
import TopRightMenu from './TopRightMenu';
import "./Header.css"; // Import the CSS file

export default function Header() {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="header-container">
            <Link to="/" className="logo-container">
                <img src="/avgh5n121.webp" alt="Logo" className="logo" />
            </Link>
            <div className="auth-buttons">
                {isAuthenticated ? <Logout /> : <LoginButton />}
            </div>
            <TopRightMenu />
        </div>
    );
}