import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign Up</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
             <Link id="wd-signup-link" to="/Kambaz/Account/Signup" className="btn btn-primary w-100 mb-2">Sign up</Link>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile">
            Sign in </Link>
      
    </div> );}

/*
export default function Signup() {  
    return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" /><br/>
      <input placeholder="password" type="password" className="wd-password" /><br/>
      <input placeholder="verify password" type="password" className="wd-password-verify" /><br/>
      <Link  to="/Kambaz/Account/Profile" > Sign up </Link><br />
      <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
    </div>
);}
*/
