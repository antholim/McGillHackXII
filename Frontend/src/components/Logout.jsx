import React from "react";
import { useNavigate } from "react-router-dom";


const LogoutButton = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => {
      localStorage.setItem('token', "");
      navigate("/");
      setIsAuthenticated(false);
    }}>
      Log Out
    </button>
  );
};

export default LogoutButton;