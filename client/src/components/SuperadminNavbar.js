import React from 'react'
import "../style/navBarStyle.css"
import {Link} from "react-router-dom"
import ReorderIcon from '@material-ui/icons/Reorder';

export default function SuperadminNavbar() {
    window.addEventListener("click", function(e){
        if(e.target.nodeName !== "svg"){
        document.querySelector("#responsive").classList.remove("responsive");

        }
    })
    function toggle(){
        document.querySelector("#responsive").classList.add("responsive")
    }

    const style ={
        width: "30.8rem",
        height: "5rem",
        borderRadius: "1rem",
        background: "linear-gradient(120deg, #C4A2AA, #2CA5CF)",
        border: "none",
        outline: "none",
        boxShadow: "0rem 1rem 2rem #31b3de8e",
        fontWeight:"bold",
        fontSize: "1.5rem",
        fontFamily: "'Poppins', sans-serif",
        color: "#F6F6F6",
        cursor: "pointer",
        transition: "all 0.5s",
    }
    return (
        <>
            <div className="NavBar">
                <div className="logo">DIGITAL <span className="span">LIBRARY</span></div>
                <div className="toggleIcon" onClick={toggle} >
                <ReorderIcon fontSize="large" />
                </div>
                <div className="navigation" id="responsive">
                     <Link to="/">
                    <button  className="goToHomeBtn" style={style}>
                    Go to Digital Library
                    </button></Link>
                    
                </div>
            </div>
        </>
    )
}
