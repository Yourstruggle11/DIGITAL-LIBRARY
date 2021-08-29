import React from 'react'
import {imageApproved, imageDeleted} from "../redux/actions/imageAction"
import { useDispatch } from 'react-redux';
import {app} from "../firebase/base"

export default function ImageDocumentCard({name,uploaderName,uploadDate,link,id}) {

    function goToDocument(){
        window.open(link, "_blank");
    }
    const dispatch = useDispatch()
    function approved() {
        dispatch(imageApproved(id))
        if(dispatch){
            alert("Approved Successfully")
        }
    }

    function deleted() {
        dispatch(imageDeleted(id))
                //delete file from firebase
                const storage = app.storage()
                var file = storage.refFromURL(link)
                // console.log(file.name);
                const storageRef = app.storage().ref()
                var delRef = storageRef.child(file.name);
                delRef.delete().then(()=>{
                    alert("Deleted Successfully.")
                }).catch((error)=>{
                    // console.log(error.message);
                })
    }

    return (
        <>
            <div className="documentBody">
                <img src={link} alt="imageThumnail" onClick={goToDocument} style={{cursor:"pointer"}}/>
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
