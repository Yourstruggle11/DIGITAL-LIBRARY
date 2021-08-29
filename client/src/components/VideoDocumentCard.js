import React from 'react'

export default function VideoDocumentCard({name,uploaderName,uploadDate,link}) {

    function goToDocument(){
        window.open(link, "_blank");
    }

    return (
        <>
            <div className="documentBody">
                {/* <img src={link} alt="imageThumnail" onClick={goToDocument} style={{cursor:"pointer"}}/> */}
                <iframe src={link} frameBorder="0" allowFullScreen="1" title={name}></iframe>
                {/* <video src={link} controls></video> */}
                {/* <embed src={link} type="" allowfullscreen="1" /> */}
                <div className="documenDetails">
                    <h2 onClick={goToDocument} style={{fontWeight:"bold", fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem", cursor:"pointer"}}>{name}</h2>
                    <p style={{fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem"}}><span style={{fontWeight:"bold"}}>Uploader Name:</span> {uploaderName}</p>
                    <p style={{ fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem"}}><span style={{fontWeight:"bold"}}>Upload Date:</span> {uploadDate}</p>
                </div>
            </div>
        </>
    )
}
