import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="continer">
                
            <h1>Welcome to My Website</h1>
            <p>This page is visible without login</p>
            
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}