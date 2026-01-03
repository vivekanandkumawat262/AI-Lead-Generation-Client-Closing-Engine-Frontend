import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();

        const  res = await  fetch("http://localhost:8000/auth/login", {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({email, password}),
		});
		             
		const data = await res.json();
        console.log(data);
        if (res.ok) {
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("role", data.role);
            if (data.role === "ADMIN") {
                navigate("/admin/dashboard");
            } else {
                navigate("/agent/dashboard");
            }
        } else {
            alert("Invalid crendentials");
        }
        // login(email);
        // navigate("/dashboard");
    };

    return (
        <div className="center">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Email"
                    required 
                    onChange={(e) => setEmail(e.target.value)}   
                />
                <input 
                    type="password"
                    placeholder="Password"
                    required 
                    onChange={(e) => setPassword(e.target.value)}   
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
         </div>
);
}  


