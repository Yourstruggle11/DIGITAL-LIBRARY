import React from 'react'
import "../style/superAdminHomePageStyle.css"

import {Link} from "react-router-dom";

export default function SuperAdminHomePageScreen() {
    return (
        <>
             <div className="home">
                <div className="pdfBox">
                    <div className="pdfInsideBox">
                        <h2 style={{fontSize:"3rem", color:"#9D9696", letterSpacing:"0.5rem", marginBottom:"4.3rem"}}>PDF</h2>
                        <p style={{fontSize:"1.5rem", color:"#000000", letterSpacing:"0rem", marginBottom:"4.3rem", textAlign:"center"}}>Read all PDF files available on the library</p>
                       <Link to="/superadmin/pdfReview"><button>Read Now</button></Link> 
                    </div>
                </div>

                <div className="imageBox">
                    <div className="imageInsideBox">
                        <h2 style={{fontSize:"3rem", color:"#9D9696", letterSpacing:"0.5rem", marginBottom:"4.3rem"}}>IMAGE</h2>
                        <p style={{fontSize:"1.5rem", color:"#000000", letterSpacing:"0rem", marginBottom:"4.3rem", textAlign:"center"}}>Read all IMAGE files available on the library</p>
                       <Link to="/superadmin/imageReview"><button>View Now</button></Link> 
                    </div>
                </div>

                <div className="videoBox">
                    <div className="videoInsideBox">
                        <h2 style={{fontSize:"3rem", color:"#9D9696", letterSpacing:"0.5rem", marginBottom:"4.3rem"}}>VIDEO</h2>
                        <p style={{fontSize:"1.5rem", color:"#000000", letterSpacing:"0rem", marginBottom:"4.3rem", textAlign:"center"}}>Read all VIDEO files available on the library</p>
                       <Link to="/superadmin/videoReview"><button>Stream Now</button></Link> 
                    </div>
                </div>
            </div>
        </>
    )
}
