import "./login.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext"


import{Link} from "react-router-dom";

const Login = () => {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const {logIn} = useUserAuth();
	const navigate = useNavigate();


	const handleLogin = async(e) => {
		e.preventDefault();
		try {
			await logIn(email, password);
			navigate("/home");
		  } catch (error) {
			setError(true);
		  }

	  };
  return (
    <div className='login'>
     	<div className="box">
		<form autoComplete="off" onSubmit={handleLogin}>
			<h2>Login</h2>
			<div className="inputBox">
				<input type="email" required="required" onChange={(e) => setEmail(e.target.value)}/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required"onChange={(e) => setPassword(e.target.value)}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<div className="ex">Forgot Password ?</div>
				<Link to="/register" style={{textDecoration :"none"}}><div className="ex">Signup</div></Link>
			</div>
			<input type="submit" value="Login"/>
			{error && <span className="er">Wrong email or password!</span>}
		</form>
	</div>
    </div>
  )
}

export default Login
