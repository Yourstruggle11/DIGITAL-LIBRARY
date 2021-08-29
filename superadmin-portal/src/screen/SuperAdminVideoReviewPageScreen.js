import React, {useEffect} from 'react'
import "../style/SuperAdminVideoReviewPageStyle.css";
import VideoDocumentCard from "../components/VideoDocumentCard"
import {videoShowToSuperAdmin} from "../redux/actions/videoAction"
import {useDispatch, useSelector} from "react-redux"
import Preloader from "../components/Preloader"


export default function SuperAdminVideoReviewPageScreen() {
    const {books, loading} = useSelector((state) => state.videoShowToSuperAdmin)
    const {approvedLoading} = useSelector((state) => state.videoApproved)
    const {deletedLoading} = useSelector((state) => state.videoDeleted)

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(videoShowToSuperAdmin())
    }, [dispatch,approvedLoading,deletedLoading])
    

    function mapFun(curele){
        return(
            <VideoDocumentCard key={curele._id} id={curele._id} name={curele.fileName} uploaderName={curele.adminName} uploadDate={curele.Date} link={curele.LINK} />
        )
    }
    return (
        <>
        <div className="videoDocumentScreen">
            <div className="mainBody" id="list">
                {books && books.map(mapFun)}
            </div>
        </div>
        {books.length === 0 ? <h1 style={{position:"absolute",top:"50%", left:"50%", transform:"translate(-50%, -50%)", color:"#828282", fontSize:"3.5rem"}}>There is no Videos to Review!</h1>:"" }
        {loading || approvedLoading || deletedLoading? <Preloader /> : ""}
    </>
    )
}
