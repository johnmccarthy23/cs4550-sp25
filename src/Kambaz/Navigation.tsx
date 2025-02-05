import { AiOutlineDashboard } from "react-icons/ai";

import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation" style={{ width: 120 }} 
    className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
 <a id="wd-neu-link" target="_blank" 
    href="https://www.northeastern.edu/"
    className="list-group-item bg-black border-0 text-center">
    <img src="/images/NEU.png" width="75px" /></a><br />
 <Link to="/Kambaz/Account" id="wd-account-link"
    className="list-group-item text-center border-0 bg-black text-white">
    <FaRegCircleUser className="fs-1 text text-white" /><br />
    Account </Link><br />
 <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
    className="list-group-item text-center border-0
               bg-white text-danger">
    <AiOutlineDashboard className="fs-1 text-danger" /><br />
    Dashboard </Link><br />
 <Link to="/Kambaz/Dashboard" id="wd-course-link"
    className="list-group-item text-white
               bg-black text-center border-0">
    <LiaBookSolid className="fs-1 text-danger" /><br />
    Courses </Link><br />
   
</div>);}
