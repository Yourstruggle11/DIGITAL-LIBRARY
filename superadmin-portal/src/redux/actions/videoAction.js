import axios from "axios";


export const videoShowToSuperAdmin = () => async (dispatch) =>{
    try {
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.get(
            "https://digital-library-server.herokuapp.com/assets/video/superadmin",
            config
        )
        dispatch({
            type:"VIDEO_SHOW_TO_SUPERADMIN",
            payload:data
        })
    } catch (error) {
        console.log(error.message);
    }
}


export const videoApproved = (id) => async (dispatch) =>{
    try {
        dispatch({
            type:"VIDEO_APPROVED_REQUEST"
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.put(
            `https://digital-library-server.herokuapp.com/assets/video/${id}`,
            config
        )

        dispatch({
            type:"VIDEO_APPROVED_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"VIDEO_APPROVED_FAIELD",
            payload:error.message
        })
    }
}

export const videoDeleted = (id) => async (dispatch) =>{
    try {
        dispatch({
            type:"VIDEO_DELETED_REQUEST"
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.delete(
            `https://digital-library-server.herokuapp.com/assets/video/${id}`,
            config
        )

        dispatch({
            type:"VIDEO_DELETED_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"VIDEO_DELETED_FAIELD",
            payload:error.message
        })
    }
}