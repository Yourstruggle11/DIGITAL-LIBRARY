import React from 'react'
import {videoApproved, videoDeleted} from "../redux/actions/videoAction"
import { useDispatch } from 'react-redux';
export default function VideoDocumentCard({name,uploaderName,uploadDate,link, id}) {

    function goToDocument(){
        window.open(link, "_blank");
    }

    const dispatch = useDispatch()
    function approved() {
        dispatch(videoApproved(id))
    }

    function deleted() {
        dispatch(videoDeleted(id))
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
                    <p style={{fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem"}}>{uploaderName}</p>
                    <p style={{ fontSize:"1.5rem", letterSpacing:"0.2rem", color:"#000000", marginBottom:"2rem"}}>{uploadDate}</p>
                </div>
                <div className="buttons">
                    <button 
                    onClick={approved}
                    className="approvedBtn"
                    > APPROVED </button>
                    <button 
                    onClick={deleted}
                    className="deleteBtn"> DELETE </button>
                </div>
            </div>
        </>
    )
}
