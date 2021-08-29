import React from 'react'
import "../style/ContactUsPageStyle.css"
import contactUs from "../assets/contactUs.svg"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function ContactUsScreen() {

    function height() {
        const msgHeight = document.getElementById("msg").scrollHeight;

        if(msgHeight <= 76){
            document.getElementById("msg").style.height = msgHeight + 2 + "px";
        }
        else{
            document.getElementById("msg").style.height = 76 + 2 + "px";
        }
    }

    return (
        <>
            <div className="contactUs">
                <div className="mainBody">
                    <div className="leftSide">
                        <img src={contactUs} alt="contactUs" />
                    </div>
                    <div className="rightSide">
                        <div className="contactUsBox">
                            <h1>Contact Us</h1>
                            <div className="contactUsDetails">
                                <div className="contactUsBoxLeftSide">
                                    <input type="text" placeholder="Full name"/>
                                    <input type="text" placeholder="E-mail"/>
                                    <textarea name="" id="msg" cols="30" onChange={height} rows="10" placeholder="Message"></textarea>
                                    <button>Contact Us</button>
                                </div>
                                <div className="contactUsBoxRightSide">
                                    <div className="contact">
                                        <h2 style={{fontFamily:"'Poppins', sans-serif", fontSize:"2.5rem", color:"#000000", letterSpacing:"0.2rem"}}>
                                        Contact
                                        </h2>
                                        <a style={{textDecoration:"none"}} href="mailto:souviksen093@gmail.com" target="_blank" rel="noopener noreferrer"><p style={{fontFamily:"'Poppins', sans-serif", fontSize:"1rem", color:"#7D7D7D"}}>souviksen093@gmail.com</p></a>
                                    </div>
                                    <div className="address">
                                    <h2 style={{fontFamily:"'Poppins', sans-serif", fontSize:"2.5rem", color:"#000000", letterSpacing:"0.2rem"}}>
                                    Based in
                                        </h2>
                                        <p style={{fontFamily:"'Poppins', sans-serif", fontSize:"1rem", color:"#7D7D7D"}}>Kolkata , India</p>
                                    </div>
                                    <div className="icon">
                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://www.facebook.com/souvik.sen.3152130/" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon fontSize="large"/></a>
                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://www.instagram.com/heartless.souvik/" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon fontSize="large"/></a>
                                        <a style={{textDecoration:"none", color:"#000000"}} href="https://twitter.com/souviks39258518" target="_blank" rel="noopener noreferrer">
                                        <TwitterIcon fontSize="large"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
