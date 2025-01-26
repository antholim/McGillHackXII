import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton'; // Import the LoginButton component
import LogoutButton from './Logout'; // Import the LogoutButton component
import "./TopRightMenu.css"; // Import the CSS file

export default function TopRightMenu() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      loginWithRedirect({ appState: { targetUrl: path } });
    }
  };

  return (
    <div className={`top-right-menu-container ${menuOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
        {menuOpen && (
          <div className="menu-content">
            <button onClick={() => handleNavigation('/testTaking')}>TRY ME</button>
            <button>FEATURE(S)</button>
            <button onClick={() => handleNavigation('/account')}>ACCOUNT</button>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />} {/* Add login/logout button */}
          </div>
        )}
      </div>
    </div>
  );
}