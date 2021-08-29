import React, {useEffect} from 'react'
import "../style/SuperAdminPdfReviewPageStyle.css";
import PdfDocumentCard from "../components/PdfDocumentCard"
import {pdfShowToSuperAdmin} from "../redux/actions/pdfAction"
import {useDispatch, useSelector} from "react-redux"
import Preloader from "../components/Preloader"

export default function SuperAdminPdfReviewPageScreen() {
    const {books,loading} = useSelector((state) => state.pdfShowToSuperAdmin)
    const {approvedLoading} = useSelector((state) => state.pdfApproved)
    const {deletedLoading} = useSelector((state) => state.pdfDeleted)
    // console.log(approvedLoading);

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pdfShowToSuperAdmin())
    }, [dispatch,approvedLoading,deletedLoading])

    function mapFun(curele){
        return(
            <PdfDocumentCard key={curele._id} id={curele._id} name={curele.fileName} uploaderName={curele.adminName} uploadDate={curele.Date} link={curele.LINK} />
        )
    }
    return (
        <>
             <div className="pdfDocumentScreen">
                <div className="mainBody" id="list">
                    {books && books.map(mapFun)}
                </div>
            </div>
            {books.length === 0 ? <h1 style={{position:"absolute",top:"50%", left:"50%", transform:"translate(-50%, -50%)", color:"#828282", fontSize:"4rem"}}>There is no Books to Review!</h1>:"" }
            {loading || approvedLoading || deletedLoading? <Preloader /> : ""}
        </>
    )
}
