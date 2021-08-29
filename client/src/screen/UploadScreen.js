import React, {useState} from 'react'
import "../style/uploadPageStyle.css"

//import all components
import VideoUploadArea from "../components/VideoUploadArea"
import ImageUploadArea from "../components/ImageUploadArea"
import PdfUploadArea from "../components/PdfUploadArea" 
import EmptyUpload from "../components/EmptyUpload"




export default function UploadScreen() {

    const [pdf, setPdf] = useState(false);
    const [image, setImage] = useState(false);
    const [video, setVideo] = useState(false);
    const [empty, setEmpty] = useState(true);

    function pdfUpload(){
        setPdf(true)
        setImage(false)
        setVideo(false)
        setEmpty(false)

    }
    function imageUpload(){
        setImage(true)
        setPdf(false)
        setVideo(false)
        setEmpty(false)

    }
    function videoUpload(){
        setVideo(true)
        setImage(false)
        setPdf(false)
        setEmpty(false)

    }
    return (
        <>
        <div className="upload">
                <div className="mainBody">
                    {pdf?<PdfUploadArea /> : ""}
                    {video?<VideoUploadArea /> : ""}
                    {image?<ImageUploadArea /> : ""}
                    {empty? <EmptyUpload /> :""}
                    <div className="buttonContainer">
                        <button onClick={pdfUpload}>PDF</button>
                        <button onClick={imageUpload}>IMAGE</button>
                        <button onClick={videoUpload}>VIDEO</button>
                    </div>
                </div>
        </div>
    </>
    )
}
