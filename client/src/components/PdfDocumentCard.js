import React from 'react'
export default function PdfDocumentCard({name,uploaderName,uploadDate,link}) {
    // console.log(uploadDate);


    function goToDocument(){
        window.open(link, "_blank");
    }

    return (
        <>
            <div className="documentBody">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="pdfThumnail" onClick={goToDocument} style={{cursor:"pointer"}}/>
                <div className="documenDetails">
                    <h2 onClick={goToDocument} style={{fontWeight:"bold", wordBreak:"break-word",fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem", cursor:"pointer"}}>{name}</h2>
                    <p style={{fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem"}}> <span style={{fontWeight:"bold"}}>Uploader Name:</span> {uploaderName}</p>
                    <p style={{ fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem"}}> <span style={{fontWeight:"bold"}}>Upload Date:</span> {uploadDate}</p>
                </div>
            </div>
        </>
    )
}
