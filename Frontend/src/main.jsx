import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import authConfig from "./auth_config.json";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      redirect_uri={window.location.origin}
      authorizationParams={{
        audience: authConfig.audience, // Ensure this matches your API's Identifier
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
