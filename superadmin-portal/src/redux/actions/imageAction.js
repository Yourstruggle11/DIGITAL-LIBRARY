import axios from "axios";


export const imageShowToSuperAdmin = () => async (dispatch) =>{
    try {
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.get(
            "https://digital-library-server.herokuapp.com/assets/image/superadmin",
            config
        )
        dispatch({
            type:"IMAGE_SHOW_TO_SUPERADMIN",
            payload:data
        })
    } catch (error) {
        console.log(error.message);
    }
}


export const imageApproved = (id) => async (dispatch) =>{
    try {
        dispatch({
            type:"IMAGE_APPROVED_REQUEST"
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.put(
            `https://digital-library-server.herokuapp.com/assets/image/${id}`,
            config
        )

        dispatch({
            type:"IMAGE_APPROVED_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"IMAGE_APPROVED_FAIELD",
            payload:error.message
        })
    }
}

export const imageDeleted = (id) => async (dispatch) =>{
    try {
        dispatch({
            type:"IMAGE_DELETED_REQUEST"
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.delete(
            `https://digital-library-server.herokuapp.com/assets/image/${id}`,
            config
        )

        dispatch({
            type:"IMAGE_DELETED_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"IMAGE_DELETED_FAIELD",
            payload:error.message
        })
    }
}