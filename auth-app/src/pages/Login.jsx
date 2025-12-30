import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

const [email, setEmail] = useState("");
const {login} = useContext(AuthContext);
const navigate = useNavigate();

const handleLogin =(e) =>{
    e.preventDefault();
    login(email);
    navigate("/dashboard");
};

return (
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
            type="email"
            placeholder="Email"
            required 
            onChange={(e) => setEmail(e.target.value)}   
        />
        <button>Login</button>
</form>
);
}