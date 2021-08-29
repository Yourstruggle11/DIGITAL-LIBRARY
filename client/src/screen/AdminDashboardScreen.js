import React, {useEffect} from 'react'
import "../style/adminDashboardPageStyle.css"
import SearchIcon from '@material-ui/icons/Search';
import Approved from "../components/Approved"
import {useSelector, useDispatch} from "react-redux"
import {adminPdfApproved, adminImageApproved,adminVideoApproved} from "../redux/actions/adminAction"

//import components
import Preloader from "../components/Preloader"


export default function AdminDashboardScreen() {
    const {pdfBooks, pdfLoading} = useSelector((state) => state.adminPdfApproved)
    const {imageBooks, imageLoading} = useSelector((state) => state.adminImageApproved)
    const {videoBooks, videoLoading} = useSelector((state) => state.adminVideoApproved)

    // console.log(videoBooks);

    // console.log(pdfBooks);

    const admindetals = JSON.parse(localStorage.getItem("adminInfo"))
    const id = admindetals._id
    // console.log(id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminPdfApproved(id))
    }, [dispatch,id])

    useEffect(() => {
        dispatch(adminImageApproved(id))
    }, [dispatch,id])

    useEffect(() => {
        dispatch(adminVideoApproved(id))
    }, [dispatch,id])

    
   
    //use MAP function to show all the approved notes dynamically
    function pdfMapFun(curele){
        return(
            <Approved key={curele._id} name={curele.fileName}/>
        )
    }
    function imageMapFun(curele){
        return(
            <Approved key={curele._id} name={curele.fileName}/>
        )
    }
    function videoMapFun(curele){
        return(
            <Approved key={curele._id} name={curele.fileName}/>
        )
    }

    //create search functionality
    function search(){
        const filter = document.getElementById("searchArea").value.toUpperCase();

        const listOne = document.getElementById("listOne");
        const boxOne = listOne.getElementsByTagName("div");

        for(let i = 1; i <boxOne.length; i++){
            const ApprovedDocumenName = boxOne[i].getElementsByTagName("h2")[0];
            if(ApprovedDocumenName){
                let documenName = ApprovedDocumenName.innerText || ApprovedDocumenName.innerHTML;
                // console.log(documenName);
                if(documenName.toUpperCase().indexOf(filter) > -1){
                    boxOne[i].style.display = "";
                }
                else{
                    boxOne[i].style.display = "none";
                }
            }
        }

        //
        const listTwo = document.getElementById("listTwo");
        const boxTwo = listTwo.getElementsByTagName("div");

        for(let i = 1; i <boxTwo.length; i++){
            const ApprovedDocumenName = boxTwo[i].getElementsByTagName("h2")[0];
            if(ApprovedDocumenName){
                let documenName = ApprovedDocumenName.innerText || ApprovedDocumenName.innerHTML;
                // console.log(documenName);
                if(documenName.toUpperCase().indexOf(filter) > -1){
                    boxTwo[i].style.display = "";
                }
                else{
                    boxTwo[i].style.display = "none";
                }
            }
        }
        
        //
        const listThree = document.getElementById("listThree");
        const boxThree = listThree.getElementsByTagName("div");

        for(let i = 1; i <boxThree.length; i++){
            const ApprovedDocumenName = boxThree[i].getElementsByTagName("h2")[0];
            if(ApprovedDocumenName){
                let documenName = ApprovedDocumenName.innerText || ApprovedDocumenName.innerHTML;
                // console.log(documenName);
                if(documenName.toUpperCase().indexOf(filter) > -1){
                    boxThree[i].style.display = "";
                }
                else{
                    boxThree[i].style.display = "none";
                }
            }
        }
    }
    return (
        <>
        <div className="adminDashboard">
                <div className="searchArea">
                    <input type="text" placeholder="Search for approved uploads" id="searchArea" onKeyUp={search}/> <SearchIcon className="icon" />
                </div>
                <div className="mainBody">
                    <div className="approvedListBody" id="listOne">
                        <h2>All approved PDF  will show below</h2>
                        <div className="approvedList">
                            {pdfBooks && pdfBooks.map(pdfMapFun)}
                        </div>
                    </div>
                    <div className="approvedListBody" id="listTwo">
                        <h2>All approved IMAGE  will show below</h2>
                        <div className="approvedList">
                            {imageBooks && imageBooks.map(imageMapFun)}
                        </div>
                    </div>
                    <div className="approvedListBody" id="listThree">
                        <h2>All approved VIDEO  will show below</h2>
                        <div className="approvedList">
                            {videoBooks && videoBooks.map(videoMapFun)}
                        </div>
                    </div>
                </div>
        </div>

        {pdfLoading || imageLoading || videoLoading ? <Preloader /> : ""}
    </>
    )
}
