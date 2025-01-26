import React from "react";
import authConfig from "./../auth_config.json";
import { useNavigate } from "react-router-dom";


const LoginButton = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  return (
      <button
          onClick={() => {
            navigate("/login");
            console.log(authConfig.clientId);
            setIsAuthenticated(true);
          }}
      >
        LOG IN
      </button>
  );
};

export default LoginButton;