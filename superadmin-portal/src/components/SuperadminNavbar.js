import React, { useEffect }  from 'react'
import "../style/navBarStyle.css"
import {useHistory} from "react-router-dom"
import ReorderIcon from '@material-ui/icons/Reorder';

//redux import
import { SuperAdminLogout } from "../redux/actions/superAdminAction";
import { useDispatch, useSelector } from "react-redux";



export default function SuperadminNavbar() {

    const history = useHistory();
    const dispatch = useDispatch();

    const {SuperAdminInfo} = useSelector((state) => state.superAdminLogin)
 
        // console.log(SuperAdminInfo);

        useEffect(() => {
            if(!SuperAdminInfo){
                history.push("/")
            }
        }, [SuperAdminInfo, history])

        function  logout() {
            dispatch(SuperAdminLogout())
            if(dispatch){
                 history.push("/")
            }
        }
    window.addEventListener("click", function(e){
        if(e.target.nodeName !== "svg"){
        document.querySelector("#responsive").classList.remove("responsive");

        }
    })
    function toggle(){
        document.querySelector("#responsive").classList.add("responsive")
    }

    const gotoStyle ={
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
    const logoutStyle ={
        width: "15rem",
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
        marginRight: "2rem"
    }
    return (
        <>
            <div className="NavBar">
                <div className="logo">DIGITAL <span className="span">LIBRARY</span></div>
                <div className="toggleIcon" onClick={toggle} >
                <ReorderIcon fontSize="large" />
                </div>
                <div className="navigation" id="responsive">
               {SuperAdminInfo ?(<button onClick={logout} className="logout" style={logoutStyle}>
                        LOGOUT
                    </button>): ""}
                     <a href="https://digital-library-e7f7e.web.app/" target="_blank" rel="noopener noreferrer">
                    <button  className="goToHomeBtn" style={gotoStyle}>
                    Go to Digital Library
                    </button></a>
                    
                </div>
            </div>
        </>
    )
}
