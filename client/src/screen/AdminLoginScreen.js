import React, {useState, useEffect} from 'react'
import "../style/adminLoginPageStyle.css"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import login from "../assets/login.svg"
import emailIcon from "../assets/emailIcon.png"
import passwordIcon from "../assets/passwordIcon.ico"
import Preloader from "../components/Preloader"

//redux import
import { adminLogin } from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

export default function AdminLoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    const history = useHistory();
    const dispatch = useDispatch();

    //getting data from backend through redux
     const {adminInfo, serverError, isAuthenticate, loading} = useSelector((state)=> state.adminLogin);
    // console.log(serverError);
  useEffect(() => {
    if(adminInfo){
      history.push("/admin")
    }

  }, [adminInfo, history])

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
            dispatch(adminLogin(email, password));
            if(isAuthenticate){
                  history.push("/admin")
            }
        }
        else{
          setError(true)
          setErrorMsg("Please fill all the fields")
        }
    };

    return (
        <>
                         <div className="adminLogin">
                <div className="mainBody">
                    <div className="leftSide">
                        <div className="header">
                            <div className="logo">
                                <p style={{color:"#7D7D7D", fontWeight:"bold", fontSize:"1.5rem"}}>DIGITAL <span className="span" style={{color:"#23AFDB"}}>LIBRARY</span></p>
                            </div>
                            <div className="buttons">
                                <p style={{color:"#15AAD9", fontWeight:"bold", fontSize:"1.9rem"}}>Login</p>
                                <Link to="/adminSignup" style={{textDecoration:"none"}}><p style={{color:"#828282", fontWeight:"100", fontSize:"1.9rem"}}>Sign Up</p></Link>
                            </div>
                        </div>
                        <div className="body">
                            <div className="title" style={{marginBottom:"4rem"}}>
                                <h2 style={{marginBottom:"2.1rem", color:"#494949", fontSize:"2.3rem", fontWeight:"100", marginTop:"3rem"}}>SIGN IN</h2>
                                 {error ? <div className="alert">{errorMsg}</div> : (<p style={{color:"#828282", fontSize:"1.6rem"}}>Sign in to continue  to <span style={{color:"#515050"}}>DIGITAL LIBRARY</span></p>)}

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
                                <input 
                                type="password" 
                                placeholder="Enter Your Password" 
                                className="passwordInput"
                                value={password}
                                onChange={(e)=>{
                                setPassword(e.target.value)
                                }}
                                /> <img className="password" src={passwordIcon} alt="passwordIcon" />
                            </div>
                           <Link to="/forgotpassword" style={{textDecoration:"none"}} > <p style={{fontSize:"1.4rem", color:"#B9B9B9", letterSpacing:"0.1rem", fontWeight:"100", position:"relative",left:"29rem",bottom:"2rem"  }}>Forgot Password?</p></Link>
                        </div>
                        <div className="buttom">
                            <button
                            onClick={submitHandler}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="circleOne">
                            <div className="circleTwo">
                                <img src={login} alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading?<Preloader/> : "" }
            
        </>
    )
}
