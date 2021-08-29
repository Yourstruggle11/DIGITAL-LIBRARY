import React, {useState} from 'react'
import "../style/activationPageStyle.css"
import { useHistory } from "react-router-dom";

//redux import
import { adminAccountActivation,adminAccountDelete } from "../redux/actions/adminAction";
import { useDispatch} from "react-redux";


export default function ActivationScreen() {
    const [code, setCode] = useState("");



    const dispatch = useDispatch();

    const history = useHistory();

    let id = "";
    let email = ""
    if(!JSON.parse(localStorage.getItem("registratinInfo"))){
        history.push("/adminSignup")
    }
    else{
         email = JSON.parse(localStorage.getItem("registratinInfo"))
    
         id = email.value._id
    }
    // console.log(email);
    // console.log(id);
    if(email === ""){
        window.location.reload()
    }


    // console.log(id);

    
    function verifyOtp(){
        /*eslint-disable */
        const now = new Date()

        if(now.getTime() > email.expiry){
            alert("OTP has expired! try sign up again!")
            dispatch(adminAccountDelete(id))
            if(dispatch){
                localStorage.removeItem("registratinInfo")
                history.push("/adminSignup")
            }
        }
        else{
            if(email.value.emailVerificationOtp == code){ 
                localStorage.removeItem("registratinInfo")
                dispatch(adminAccountActivation(id))
                history.push("/adminLogin")
            }
            else{
                alert("this is not the correct Code!")
            }
        }

    }
    function emailChange() {
        dispatch(adminAccountDelete(id))
        if(dispatch){
            history.push("/adminSignup")
            localStorage.removeItem("registratinInfo")
        }
    }
    /*eslint-disable */
    return (
        <>
            <div className="activation">
                <div className="mainBody">
                    <h2>We sent a code to your email</h2>
                    <p> Enter the 4-digit verification code sent to <span className="span" style={{color:"#21AEDB"}}>{email? email.value.email :"Admin Email"}</span></p>
                    <p className="emailChangeBtn" onClick={emailChange}>Change Email</p>
                    <div className="input">
                        <input 
                        type="text" 
                        placeholder="4 digit code" 
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value)
                        }}
                        />
                    </div>
                    <button
                    onClick={verifyOtp}
                    >
                    VERIFY
                    </button>
                    <p>If you don't see the email in your inbox, check your spam folder.</p>
                </div>
        </div>
        </>
    )
}
