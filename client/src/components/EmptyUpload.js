import React from 'react'
import "../style/uploadPageStyle.css";
import emptyUpload from "../assets/emptyUpload.svg"


export default function EmptyUpload() {
    return (
        <>
             <div className="emptyUpload">
                <h2 style={{fontSize:"2rem", color:"#15AAD9", }}>Choose a file type to upload</h2>
                <img src={emptyUpload} alt="emptyUpload" />
            </div>
        </>
    )
}
