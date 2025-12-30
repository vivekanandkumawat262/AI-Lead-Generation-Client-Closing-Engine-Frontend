import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
		   return (
		       <BrowserRouter>
			       <Routes>
				      <Route path="/" element={<Home />} />
					  <Route path="/login" element={<Login />} />
			          <Route path="/signup" element={<Signup />} />
					  
					  {/* Protected*/}
					  <Route 
					        path="/dashboard" 
					        element={<PrivateRoute> <Dashboard/> </PrivateRoute>} 
					  />
					  
				   </Routes>
			   </BrowserRouter>
		   )
	   }
		   
       export default App;