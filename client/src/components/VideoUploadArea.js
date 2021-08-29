import React, {useState} from 'react'
import "../style/uploadPageStyle.css";
import Preloader from './Preloader';
import VIDEO_upload_svg from "../assets/VIDEO_upload_svg.svg"
import videoIcon from "../assets/videoIcon.png";
import linkIcon from "../assets/linkIcon.png";
import {videoUpload} from "../redux/actions/videoAction"
import {useDispatch} from "react-redux"

export default function VideoUploadArea() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [preloader, setPreloader] = useState(false)


    const dispatch = useDispatch();

    function submitHandler(){
        if(name && link){
            // validate URL
            const pattern = new RegExp('^(https?:\\/\\/)?'+ 
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
            '(\\#[-a-z\\d_]*)?$','i');

            if(pattern.test(link)){
                  setPreloader(true)                    
                  const URL = link.split("v=")[1].substring(0, 11);
                  const VIDEOURL = `https://www.youtube.com/embed/${URL}`
                   const status = false
                   const adminDetails =  JSON.parse(localStorage.getItem("adminInfo"))
                   const getDate = new Date();
                   const currentDate = getDate.toLocaleDateString();
                   const currentTime = getDate.toLocaleTimeString();
                   const currentDateAndTime = currentDate + " " + currentTime
                   dispatch(videoUpload(adminDetails.name, adminDetails._id ,name,currentDateAndTime, VIDEOURL,status))
                //    console.log(VIDEOURL);
                //     console.log(dispatch);
                   if(dispatch){
                         setPreloader(false)   
                         alert("File Uploaded Successfully")
                   }
                   else{
                    alert("Something Went Wrong!")
                    setPreloader(false)   
                   }
            }
            else{
                alert("this is not the correct link")
            }
        }
        else{
            alert("Please fill both fields!")
        }
    }


    return (
        <>
             <div className="videoUploadArea">
                <div className="leftSide">
                    <div className="uploadInput">
                        <img src={VIDEO_upload_svg} alt="VIDEO_upload_svg" />
                    </div>
                </div>
                <div className="rightSide">
                    <h2 style={{fontSize:"2rem", color:"#000000", fontWeight:"100", position:"relative", left:"-15rem", top:"-2rem"}}>UPLOAD VIDEO</h2>

                    <div className="inputForFileName">
                        <input 
                        type="text" 
                        placeholder="Enter Your Video File Name"
                        value={name}
                        onChange={(e) =>{
                        setName(e.target.value)
                        }}
                        /><img src={videoIcon} alt="videoIcon" />
                    </div>
                    <div className="note">
                        <p>NOTE: Give a proper name to your file according to the topic this will help to sort your file on the <span style={{color:"#23AFDB"}}>LIBRARY</span></p>
                    </div>
                    <div className="inputForFileLink">
                        <input 
                        type="text" 
                        placeholder="PASTE Your Youtube Video Link" 
                        value={link}
                        onChange={(e) =>{
                        setLink(e.target.value)
                        }}
                        /><img src={linkIcon} alt="linkIcon" />
                    </div>
                    <div className="uploadBtn">
                        <button
                        onClick={submitHandler} 
                        >UPLOAD</button>
                    </div>
                </div>
            </div>
            {preloader? <Preloader /> : ""}
        </>
    )
}
