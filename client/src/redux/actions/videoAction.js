import axios from "axios";

export const videoUpload = (adminName,adminId,fileName,Date,LINK,status) => async (dispatch) =>{
    try {
        dispatch({
            type: "VIDEO_UPLOAD_REQUEST"
        })
        const config= {
            "Content-type": "application/json",    
        }
        const {data} = await axios.post(
            "https://digital-library-server.herokuapp.com/assets/video",
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
            "https://digital-library-server.herokuapp.com/assets/video/users",
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