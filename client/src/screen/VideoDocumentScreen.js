import React, {useEffect} from 'react';
import "../style/videoDocumentPageStyle.css";
import SearchIcon from '@material-ui/icons/Search';
import VideoDocumentCard from "../components/VideoDocumentCard"
import Preloader from "../components/Preloader"
import { useDispatch, useSelector } from "react-redux";
import {videoShowToUser} from "../redux/actions/videoAction"

export default function VideoDocumentScreen() {

    const dispatch = useDispatch();
    const { books, loading } = useSelector((state) => state.videoUpload);
    //console.log(books);
    useEffect(() => {
      dispatch(videoShowToUser())
    }, [dispatch])
   
    

    function mapFun(curele){
        return(
            <VideoDocumentCard key={curele._id} name={curele.fileName} uploaderName={curele.adminName} uploadDate={curele.Date} link={curele.LINK} />
        )
    }

    //create search functionality
    function search(){
        const filter = document.getElementById("searchArea").value.toUpperCase();

        const list = document.getElementById("list");
        const box = list.getElementsByTagName("div");

        for(let i = 0; i < box.length ; i++){
            const availableDocumentName = box[i].getElementsByTagName("h2")[0];

            if(availableDocumentName){
                const name = availableDocumentName.innerText || availableDocumentName.innerHTML;
                if(name.toUpperCase().indexOf(filter) > -1){
                    box[i].style.display = "";
                }
                else{
                    box[i].style.display = "none";
                }
            }
        }
    }
    return (
        <>
        <div className="videoDocumentScreen">
            <div className="searchArea">
                 <input type="text" placeholder="Search for Documents" id="searchArea" onKeyUp={search}/> <SearchIcon className="icon" />
            </div>
            <div className="mainBody" id="list">
                {books && books.map(mapFun)}
            </div>
        </div>
        {loading ? <Preloader /> : ""}
    </>
    )
}
