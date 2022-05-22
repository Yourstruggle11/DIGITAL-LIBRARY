import axios from "axios";

const API = process.env.REACT_APP_API


export const imageUpload = (adminName,adminId,fileName,Date,LINK,status) => async (dispatch) =>{
    try {
        dispatch({
            type: "IMAGE_UPLOAD_REQUEST"
        })  
        const config= {
            "Content-type": "application/json",    
        }
        const {data} = await axios.post(
            `{API}/assets/image`,
            {adminName,adminId,fileName,Date,LINK,status},
            config
        );
        dispatch({
            type:"IMAGE_UPLOAD_SUCCESS",
            payload: data
        })
    } catch (error) {
        dispatch({
            type:"IMAGE_UPLOAD_FAIELD",
            payload: error.message
        })
    }
}

export const imageShowToUser = () => async (dispatch) =>{
    try {
        const config= {
            "Content-type": "application/json",    
        }
        const {data} = await axios.get(
            `${API}/assets/image/users`,
            config
        );
        dispatch({
            type:"IMAGE_SHOW_TO_USER",
            payload: data
        })
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}