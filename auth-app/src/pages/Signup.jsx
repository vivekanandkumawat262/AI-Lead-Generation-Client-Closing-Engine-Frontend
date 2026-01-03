 
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // const {login} = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleSignup = async (e) =>{
        e.preventDefault();
        setError("");
        setMessage("");

        try{
            const res = await axios.post("http://127.0.0.1:8000/auth/register",{
                  email,
                  password,
            });

            setMessage(res.data.message);
            setEmail("");
            setPassword("");
            navigate("/login");
            
        }catch (err) {
            setError(err.response?.data?.detail || "Signup failed");
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <input 
                type="email"
                placeholder="Email"
                required 
                onChange={(e) => setEmail(e.target.value)}   
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            {message && <p style={{color: "green"}}>{message}</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit">Create Account</button>
        </form>
    );
}