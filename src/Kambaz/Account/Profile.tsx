import { Form, Button } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
    <h1>Profile</h1>
      <Form>
        <Form.Control type="username" placeholder="alice" className="mb-2"/>
        <Form.Control type="password" placeholder="123" className="mb-2"/>
        <Form.Control type="text" placeholder="Alice" className="mb-2"/>
        <Form.Control type="text" placeholder="Wonderland" className="mb-2"/>
        <Form.Control type="date" className="mb-2"/>
        <Form.Control type="email" placeholder="alice@wonderland.com" className="mb-2"/>
        <Form.Select className="mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option> 
          <option value="STUDENT">Student</option>
        </Form.Select>
        <Button variant="danger">Signout</Button>

      </Form>

      </div>
    /*
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
    */
);}
