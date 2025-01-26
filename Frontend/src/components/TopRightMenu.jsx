import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
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
            <button onClick={() => handleNavigation('/')}>Account</button>
            <button onClick={() => handleNavigation('/testTaking')}>Try it out!</button>
            <button>Feature to be seen</button>
          </div>
        )}
      </div>
    </div>
  );
}