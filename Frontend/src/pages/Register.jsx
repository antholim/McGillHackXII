import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    setError(""); // Clear previous errors

    try {
      console.log("Registering user...");
      console.log(email)
      console.log(password)
      const result = await axios.post("http://localhost:3000/register", {
        email,
        password,
      });

      console.log("Registration successful:", result.data);
      console.log(email)
      navigate("/login"); // Navigate to login page after successful registration
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error?.response?.data?.message || "Registration failed. Please try again.");
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={async (e)=> {
            await handleSubmit(e)
        }}>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default Register;
