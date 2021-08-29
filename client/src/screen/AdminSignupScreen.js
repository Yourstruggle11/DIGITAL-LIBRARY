import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import "../style/adminSignUpPageStyle.css"
import {Link} from "react-router-dom"
import signup from "../assets/signup.svg"
import emailIcon from "../assets/emailIcon.png"
import passwordIcon from "../assets/passwordIcon.ico"
import userNameIcon from "../assets/userNameIcon.png"
import Preloader from "../components/Preloader"

//redux import
import { adminRegistration } from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

export default function AdminSignupScreen() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const history = useHistory();
  const dispatch = useDispatch();

  //getting data from backend through redux
  const {emailCheck,serverError,loading} = useSelector((state) => state.adminRegistration);

  //active preloader
  useEffect(() =>{
    if(emailCheck){
      setTimeout(function(){
      history.push(`/activation`) 
      },1000)
    }
  }, [emailCheck, history])

  //serverside validation
  useEffect(() =>{
    if(serverError !== null){
      setError(true)
      setErrorMsg("User with this email address already exist!")
    }
  }, [serverError])

//code for validation
const submitHandler = (event) => {
    event.preventDefault();
    if (name && email && password) {
      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        if(password.match(/^[A-Za-z]\w{7,14}$/)){
          setError(false)
          dispatch(adminRegistration(name,email, password))
        }
        else{
          setError(true)
          setErrorMsg("password must be between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter")
        }

      }
      else{
        setError(true)
        setErrorMsg("This is not the right email")
      }

    } else {
      setError(true)
      setErrorMsg("Please fill all the fields")
    }
  };
  
    return (
        <>
        <div className="adminSignUp">
<div className="mainBody">
<div className="leftSide">
       <div className="circleOne">
           <div className="circleTwo">
               <img src={signup} alt="signup" />
           </div>
       </div>
   </div>
   <div className="rightSide">
       <div className="header">
           <div className="logo">
               <p style={{color:"#7D7D7D", fontWeight:"bold", fontSize:"1.5rem"}}>DIGITAL <span className="span" style={{color:"#23AFDB"}}>LIBRARY</span></p>
           </div>
           <div className="buttons">
              <Link to="/adminLogin" style={{textDecoration:"none"}}><p style={{color:"#828282", fontWeight:"100", fontSize:"1.9rem"}}>Login</p></Link>
               <p style={{color:"#D97315", fontWeight:"bold", fontSize:"1.9rem"}}>Sign Up</p>
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
               placeholder="Enter Your Name"
                className="userNameInput" 
                value={name}
                onChange={(e) => {
                setName(e.target.value);
                }}
               /> <img className="userName" src={userNameIcon} alt="userNameIcon" />
               <input 
               type="text" 
               placeholder="Enter Your Email Address" 
               className="emailInput" 
               value={email}
               onChange={(e) => {
               setEmail(e.target.value);
                }}
               /> <img className="email" src={emailIcon} alt="emailIcon" />
               <input 
               type="password" 
               placeholder="Enter Your Password" 
               className="passwordInput"
               value={password}
               onChange={(e) => {
               setPassword(e.target.value);
               }}
               /> <img className="password" src={passwordIcon} alt="passwordIcon" />
           </div>
          <Link to="/adminLogin" style={{textDecoration:"none"}} > <p style={{fontSize:"1.4rem", color:"#B9B9B9", letterSpacing:"0.1rem", fontWeight:"100", position:"relative",left:"25rem",bottom:"2rem"  }}>Already have account?</p></Link>
       </div>
       <div className="buttom">
           <button
           onClick={submitHandler}
           >
               Sign Up
           </button>
       </div>
   </div>

</div>
</div>
{loading ? <Preloader /> :""}

</>
    )
}
