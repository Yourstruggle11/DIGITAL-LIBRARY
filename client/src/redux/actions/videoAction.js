import axios from "axios";

const API = process.env.REACT_APP_API


export const videoUpload = (adminName,adminId,fileName,Date,LINK,status) => async (dispatch) =>{
    try {
        dispatch({
            type: "VIDEO_UPLOAD_REQUEST"
        })
        const config= {
            "Content-type": "application/json",    
        }
        const {data} = await axios.post(
            `${API}/assets/video`,
            {adminName,adminId,fileName,Date,LINK,status},
            config
        );
        dispatch({
            type:"VIDEO_UPLOAD_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type:"VIDEO_UPLOAD_FAIELD",
            payload: error.message
        })
    }
}

export const videoShowToUser = () => async (dispatch) =>{
    try {
        const config= {
            "Content-type": "application/json",    
        }
        const {data} = await axios.get(
            `${API}/assets/video/users`,
            config
        );
        dispatch({
            type:"VIDEO_SHOW_TO_USER",
            payload: data
        })
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}