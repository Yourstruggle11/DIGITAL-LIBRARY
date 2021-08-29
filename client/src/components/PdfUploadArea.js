import React, {useState} from 'react'
import "../style/uploadPageStyle.css";
import PDF_upload_svg from "../assets/PDF_upload_svg.svg"
import ICON_for_file_name_pdf from "../assets/ICON_for_file_name_pdf.svg"
import Preloader from './Preloader';
import {app} from "../firebase/base"
import {pdfUpload} from "../redux/actions/pdfAction"
import {useDispatch} from "react-redux"

export default function PdfUploadArea() {


    

    const [documentName, setDocumentName] = useState("Name here ...");
    const [documentSize, setDocumentSize] = useState("Size here ...");
    const [mb, setMb] = useState(false);
    const [preloader, setPreloader] = useState(false)

    const dispatch = useDispatch();





    function inputFun() {
        document.getElementById("upload").click()
    }

    //showing document details on UI
    function updateDocumentDetails(){
     //deducting extention
    const inputDetails = document.getElementById("upload").files[0];
    const nameWithExt = inputDetails.name.lastIndexOf('.');
    let deductExt =   inputDetails.name.substring(0, nameWithExt)
    setDocumentName(deductExt)
    setDocumentSize(Math.floor(inputDetails.size/(1024*1024)))
    setMb(true)
    }

    //validation
    let validFile = ["pdf", "PDF"];
    function submitHandler(e){
        if(document.getElementById("upload").value === ""){
            alert("Please select a PDF file")

        }
        else{
            const inputDetails = document.getElementById("upload").files[0];
            const input = document.getElementById("upload").value.lastIndexOf('.');
            let ext =   document.getElementById("upload").value.substring(input+1)
            // console.log(input);
            // console.log(ext);
        
            let result = validFile.includes(ext);
        
            // console.log(result);
            if(result){
                if(parseFloat(inputDetails.size/(1024*1024)) > 3){
                alert("File size must be smaller than 3MB")
                window.location.reload();
                }
                else{
                    setPreloader(true)
                    async function uploadFile (){
                        const storageRef = app.storage().ref();
                        const fileRef = storageRef.child(inputDetails.name);
                       await fileRef.put(inputDetails)
                       const PDFURL = await fileRef.getDownloadURL(); 
                    //    console.log(PDFURL); 
                       const status = false

                       const adminDetails =  JSON.parse(localStorage.getItem("adminInfo"))
                       const getDate = new Date();
                       const currentDate = getDate.toLocaleDateString();
                       const currentTime = getDate.toLocaleTimeString();
                       const currentDateAndTime = currentDate + " " + currentTime
                       dispatch(pdfUpload(adminDetails.name, adminDetails._id,documentName,currentDateAndTime, PDFURL,status))
                        // console.log(dispatch);
                       if(dispatch){
                        setPreloader(false)
                            alert("File Uploaded Successfully")
                       }
                       else{
                        alert("Something Went Wrong!")
                        setPreloader(false)   
                       }
                    }
                    uploadFile()
                }
            }
            else{
                alert("Your are inside PDF upload section only PDF accepted here..")
            }
        }
    }
    return (
        <>
            <div className="pdfUploadArea">
                <div className="leftSide">
                    <div className="uploadInput" onClick={inputFun}>
                        <input id="upload" type="file" hidden onChange={updateDocumentDetails} />
                        <img src={PDF_upload_svg} alt="PDF_upload_svg" />
                        <p style={{ color: "#BE1717", fontSize: "1.5rem", letterSpacing: "0.2rem" }}>Browse File To Upload</p>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="documentDetails">
                        <div className="icon">
                            <img src={ICON_for_file_name_pdf} alt="ICON_for_file_name_pdf" />
                        </div>
                        <div className="details">
                            <p>{documentName}</p>
                            <p>{ mb ?documentSize +  "MB" : documentSize}</p>
                        </div>
                    </div>
                    <div className="note">
                        <p>NOTE: Give a proper name to your file according to the topic this will help to sort your file on the <span style={{ color: "#23AFDB" }}>LIBRARY</span></p>
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
