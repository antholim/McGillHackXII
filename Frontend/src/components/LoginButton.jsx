import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import authConfig from "./../auth_config.json";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <button
          onClick={() => {
            loginWithRedirect();
            console.log(authConfig.clientId);
          }}
      >
        LOG IN
      </button>
  );
};

export default LoginButton;