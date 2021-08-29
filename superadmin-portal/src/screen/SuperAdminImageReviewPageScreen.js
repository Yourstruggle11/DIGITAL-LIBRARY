import React, {useEffect} from 'react'
import "../style/SuperAdminImageReviewPageStyle.css";
import ImageDocumentCard from "../components/ImageDocumentCard"
import {imageShowToSuperAdmin} from "../redux/actions/imageAction"
import {useDispatch, useSelector} from "react-redux"
import Preloader from "../components/Preloader"


export default function SuperAdminImageReviewPageScreen() {
    const {books,loading} = useSelector((state) => state.imageShowToSuperAdmin)
    const {approvedLoading} = useSelector((state) => state.imageApproved)
    const {deletedLoading} = useSelector((state) => state.imageDeleted)

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(imageShowToSuperAdmin())
    }, [dispatch,approvedLoading,deletedLoading])
    

    function mapFun(curele){
        return(
            <ImageDocumentCard key={curele._id} id={curele._id} name={curele.fileName} uploaderName={curele.adminName} uploadDate={curele.Date} link={curele.LINK} />
        )
    }
    return (
        <>
            <div className="imageDocumentScreen">
                <div className="mainBody" id="list">
                    {books && books.map(mapFun)}
                </div>
            </div>
            {books.length === 0 ? <h1 style={{position:"absolute",top:"50%", left:"50%", transform:"translate(-50%, -50%)", color:"#828282", fontSize:"3.5rem"}}>There is no Images to Review!</h1>:"" }
            {loading || approvedLoading || deletedLoading? <Preloader /> : ""}
        </> 
    )
}
