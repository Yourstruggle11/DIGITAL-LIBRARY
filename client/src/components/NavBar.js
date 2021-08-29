import React from 'react'
import "../style/navBarStyle.css"
import { Link, useHistory } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import { useDispatch, useSelector } from "react-redux";
import {adminLogout} from "../redux/actions/adminAction";


export default function NavBar() {
    const { adminInfo } = useSelector((state) => state.adminLogin);

    const dispatch = useDispatch();
    const history = useHistory()


    function  logout() {
        dispatch(adminLogout())
        if(dispatch){
             history.push("/adminLogin")
        }
    }


    window.addEventListener("click", function (e) {
        if (e.target.nodeName !== "svg") {
            document.querySelector("#responsive").classList.remove("responsive");
        }
    })
    function toggle() {
        document.querySelector("#responsive").classList.add("responsive")
    }
    return (
        <>
            <div className="NavBar">
                <Link to="/admin" style={{textDecoration:"none"}}><div className="logo" style={{color: "#7D7D7D",fontWeight:900, fontSize:" 2rem", marginLeft: "-5rem"}}>DIGITAL <span className="span" style={{color: "#23AFDB"}}>LIBRARY</span></div> </Link>
                <div className="toggleIcon" onClick={toggle} >
                    <ReorderIcon fontSize="large" />
                </div>
                <div className="navigation" id="responsive">

                    <ul>
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                    {adminInfo ? (
                        <button 
                        onClick={logout}
                        className="signInBtn">
                            LOGOUT
                        </button>) : (<Link to="/adminLogin">
                            <button className="signInBtn">
                                Sign In
                            </button></Link>)}


                </div>
            </div>
        </>
    )
}
