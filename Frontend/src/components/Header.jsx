import LoginButton from "./LoginButton";
import LogoutButton from "./Logout";
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { getAccessTokenSilently, user } = useAuth0();
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <button
        onClick={async () => {
          const token = await getAccessTokenSilently({
            audience: "https://dev-fzkfxnygjmq02nja.us.auth0.com/api/v2/",
          });
          console.log(token);
        }}
      >
        TEST
      </button>
      {user ?? <h1>{user} 234</h1>}
    </>
  );
}
