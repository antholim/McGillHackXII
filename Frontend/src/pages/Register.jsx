import { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/testTaking");
    }
  }, []);
  async function handleSubmit(e) {
    try {
      //   e.preventDefault();
      console.log("Registering");
      const result = await axios.post("http://localhost:3000/register", {
        email,
        password,
      });

      console.log(email, password);
      console.log("EMAIL");
      console.log(result);
      if (result?.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setError(error?.response?.data);
    }
  }

  return (
    <div>
      <h2>Sign up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Sign up
      </button>
    </div>
  );
}
export default Register;
