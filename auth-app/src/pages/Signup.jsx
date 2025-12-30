import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {

const [email, setEmail] = useState("");
const {login} = useContext(AuthContext);
const navigate = useNavigate();

const handleSignup =(e) =>{
    e.preventDefault();
    login(email);
    navigate("/dashboard");
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
        <button>Signup</button>
</form>
);
}