import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard(){
			
        const { user, logout} = useContext(AuthContext);
        
        return (
            <div>
                    <h1>Welcome to Dashboard </h1>
                    <p>Welcome {user.email}</p>
                    <button onClick={logout}>Logout</button>
            </div>
        )
}	