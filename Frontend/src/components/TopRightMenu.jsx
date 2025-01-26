import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './Logout';
import "./TopRightMenu.css";

export default function TopRightMenu() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=> {
      const token = localStorage.getItem('token');
      if (token) {
          setIsAuthenticated(true);
      }
  }, [isAuthenticated])
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
            {isAuthenticated ? <LogoutButton setIsAuthenticated={setIsAuthenticated}/> : <LoginButton setIsAuthenticated={setIsAuthenticated}/>} {/* Add login/logout button */}
          </div>
        )}
      </div>
    </div>
  );
}