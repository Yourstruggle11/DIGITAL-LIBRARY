import React from 'react'
import "../style/adminHomePageStyle.css"
import admin_dashboard from "../assets/admin_dashboard.svg"
import admin_upload from "../assets/admin_upload.svg"
import { Link } from "react-router-dom";


export default function AdminHomePageScreen() {


    //make a function to greet admin
    const getTime = new Date();
    // console.log(getTime.getHours());
    let greeting = "";
    if (getTime.getHours() > 4 && getTime.getHours() < 12) {
        greeting = "Good morning"
    }
    else if (getTime.getHours() >= 12 && getTime.getHours() < 16) {
        greeting = "Good afternoon"
    }
    else if (getTime.getHours() >= 16 && getTime.getHours() < 20) {
        greeting = "Good evening"
    }
    else {
        greeting = "Good night"
    }

    //getting admin name from localstorage
    const adminDetails = JSON.parse(localStorage.getItem("adminInfo")) 
    const admin = adminDetails.name;
    return (
        <>
            <div className="admin">
                <div className="mainBody">
                    <div className="greeting">
                        <h2 style={{ color: "#7D7D7D", fontSize: "2rem", letterSpacing: "0.2rem" }}>{greeting} <span style={{ color: "#23AFDB", fontSize: "2rem", letterSpacing: "0.2rem" }}>{admin}</span></h2>
                    </div>
                    <div className="dashboard">
                            <img src={admin_dashboard} alt="admin_dashboard" />
                            <Link to="/adminDashboard"> <button>
                                Go to Dashboard
                            </button> </Link>
                        </div>
                        <div className="upload">
                            <img src={admin_upload} alt="admin_upload" />
                            <Link to="/uploads"><button>
                                Upload
                            </button></Link>

                        </div>
                </div>
            </div>
        </>
    )
}
