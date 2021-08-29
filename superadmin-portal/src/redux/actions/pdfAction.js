import axios from "axios";


export const pdfShowToSuperAdmin = () => async (dispatch) =>{
    try {
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.get(
            "https://digital-library-server.herokuapp.com/assets/pdf/superadmin",
            config
        )
        dispatch({
            type:"PDF_SHOW_TO_SUPERADMIN",
            payload:data
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const pdfApproved = (id) => async (dispatch) =>{
    try {
        dispatch({
            type:"PDF_APPROVED_REQUEST"
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.put(
            `https://digital-library-server.herokuapp.com/assets/pdf/${id}`,
            config
        )

        dispatch({
            type:"PDF_APPROVED_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"PDF_APPROVED_FAIELD",
            payload:error.message
        })
    }
}

export const pdfDeleted = (id) => async (dispatch) =>{
    try {
        dispatch({
            type:"PDF_DELETED_REQUEST"
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.delete(
            `https://digital-library-server.herokuapp.com/assets/pdf/${id}`,
            config
        )

        dispatch({
            type:"PDF_DELETED_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"PDF_DELETED_FAIELD",
            payload:error.message
        })
    }
}