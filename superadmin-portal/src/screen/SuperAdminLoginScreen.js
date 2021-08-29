import React, {useState, useEffect}from 'react'
import "../style/superadminLoginPageStyle.css"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import SUPERADMIN_page_svg from "../assets/SUPERADMIN_page_svg.svg"
import emailIcon from "../assets/emailIcon.png"
import passwordIcon from "../assets/passwordIcon.ico"
import Preloader from "../components/Preloader"


//redux import
import { superAdminLogin } from "../redux/actions/superAdminAction";
import { useDispatch, useSelector } from "react-redux";
export default function SuperAdminLoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();

        //getting data from backend through redux
        const {SuperAdminInfo, serverError, isAuthenticate, loading} = useSelector((state)=> state.superAdminLogin);

        useEffect(() => {
            if(SuperAdminInfo){
              history.push("/superadmin")
            }
          }, [SuperAdminInfo, history])
        
          useEffect(() => {
            if(serverError === "Request failed with status code 404"){
              setError(true);
              setErrorMsg("No account associated with this email");
            }
        
          }, [serverError])
          useEffect(() => {
            if(serverError === "Request failed with status code 401"){
              setError(true);
              setErrorMsg("Invalid email or password");
            }
        
          }, [serverError])

    //validation
    const submitHandler = (event) =>{
        event.preventDefault();
        if(email && password){
            dispatch(superAdminLogin(email, password))
            if(isAuthenticate){
                history.push("/superadmin")
          }
        }
        else{
          setError(true)
          setErrorMsg("Please fill all the fields")
        }
    };

    return (
            <>
             <div className="superadminLogin">
                <div className="mainBody">
                    <div className="leftSide">
                        <div className="header">
                            <div className="logo">
                                <p style={{color:"#7D7D7D", fontWeight:"bold", fontSize:"1.5rem"}}>DIGITAL <span className="span" style={{color:"#BA2A2E"}}>LIBRARY</span></p>
                            </div>
                            <div className="buttons">
                                <p style={{color:"#C6A2AA", fontWeight:"bold", fontSize:"1.9rem"}}>Login</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="title" style={{marginBottom:"4rem"}}>
                                <h2 style={{marginBottom:"2.1rem", color:"#494949", fontSize:"2.3rem", fontWeight:"100", marginTop:"3rem"}}>SIGN IN</h2>
                                {error ? <div className="alert">{errorMsg}</div> : (<p style={{color:"#828282", fontSize:"1.6rem"}}>Welcome <span style={{color:"#BA2A2E"}}>SUPERADMIN</span></p>)}
                            </div>
                            <div className="inputArea">
                                <input 
                                type="text" 
                                placeholder="Enter Your Email Address" 
                                className="emailInput" 
                                value={email}
                                onChange={(e)=>{
                                setEmail(e.target.value)
                                }}
                                /> <img className="email" src={emailIcon} alt="emailIcon" />
                                <input type="password" placeholder="Enter Your Password" className="passwordInput"
                                value={password}
                                onChange={(e)=>{
                                setPassword(e.target.value)
                                }}
                                /> <img className="password" src={passwordIcon} alt="passwordIcon" />
                            </div>
                           <Link to="#" style={{textDecoration:"none"}} > <p style={{fontSize:"1.4rem", color:"#B9B9B9", letterSpacing:"0.1rem", fontWeight:"100", position:"relative",left:"29rem",bottom:"2rem"  }}>Forgot Password?</p></Link>
                        </div>
                        <div className="buttom">
                            <button
                            onClick={submitHandler}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="circleOne">
                            <div className="circleTwo">
                                <img src={SUPERADMIN_page_svg} alt="SUPERADMIN_page_Svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? <Preloader /> : ""}
        </>
    )
}
