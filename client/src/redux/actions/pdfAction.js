import axios from "axios";

const API = process.env.REACT_APP_API


export const pdfUpload = (adminName,adminId,fileName,Date,LINK,status) => async (dispatch) =>{
    try {
        dispatch({
            type: "PDF_UPLOAD_REQUEST"
        })
        const config= {
            "Content-type": "application/json",     
        }
        const {data} = await axios.post(
            `${API}/assets/pdf`,
            {adminName,adminId,fileName,Date,LINK,status},
            config
        );
        dispatch({
            type:"PDF_UPLOAD_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type:"PDF_UPLOAD_FAIELD",
            payload: error.message
        })
    }
}


export const pdfShowToUser = () => async (dispatch) =>{
    try {
        const config= {
            "Content-type": "application/json",    
        }
        const {data} = await axios.get(
            `${API}/assets/pdf/users`,
            config
        );
        dispatch({
            type:"PDF_SHOW_TO_USER",
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}