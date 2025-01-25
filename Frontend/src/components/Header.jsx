import LoginButton from "./LoginButton";
import LogoutButton from "./Logout";
import axios from "axios"
export default function Header() {
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
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <button onClick={async ()=> {
        await fetchProfile();
      }}>Test</button>
    </>
  );
}
