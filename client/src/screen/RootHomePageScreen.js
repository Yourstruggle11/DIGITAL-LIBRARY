import React from 'react'
import "../style/rootHomePageStyle.css"
import root_page_read from "../assets/root_page_read.svg"
import root_page_admin_account from "../assets/root_page_admin_account.svg"
import diamondSvg from "../assets/diamondSvg.png"
import {Link} from "react-router-dom";


export default function RootHomePageScreen() {
    return (
        <>
            <div className="rootHome">
                <div className="mainBody">
                    <div className="leftSide">
                        <div className="readArea">
                            <div className="readSvg">
                                <div className="svgBackground">
                                    <img src={root_page_read} alt="root_page_read" />
                                </div>
                            </div>
                            <div className="readBtn">
                                <p>Access all the available resourceses on this Library for free</p>
                                <Link to="/home"> <button className="readNowBtn">
                                Read Now
                                </button></Link>
                            </div>
                        </div>
                        <div className="adminAcArea">
                            <div className="adminAcBtn">
                                <p>Create a admin account to upload resourceses</p>
                                <Link to="/adminSignup"><button className="adminAcCreateBtn">
                                Upload resources 
                                </button></Link>
                            </div>
                            <div className="adminAcSvg">
                                <div className="svgBackground">
                                    <img src={root_page_admin_account} alt="root_page_admin_account" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightSide">
                        <h2>DIGITAL <span className="span">LIBRARY</span></h2>
                        <img src={diamondSvg} alt="diamondSvg" />
                        <p>People of all demographic categories and geographic regions will access a good digital library. </p>
                    </div>
                </div>
            </div>
        </>
    )
}
