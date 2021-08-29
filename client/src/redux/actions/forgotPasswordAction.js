import axios from "axios";

export const sendRecoveryEmail = (email) => async  (dispatch) =>{
    try {
        dispatch({
            type:"EMAIL_REQUEST",
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await    axios.post(
            "https://digital-library-server.herokuapp.com/admin/forgotpassword/sendmail" ,
                                        {email},
                                        config
        )
        dispatch({
            type:"EMAIL_SENT",
            payload:data
        })
        // console.log(data);
        localStorage.setItem("otpForResetPassword", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:"EMAIL_SENT_FAIELD",
            payload:error.message
        })
    }
}

export const updatePassword = (password,id) => async  (dispatch) =>{
    try {
        dispatch({
            type:"UPDATE_PASSWORD_REQUEST",
        })
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await    axios.put(
            `https://digital-library-server.herokuapp.com/admin/forgotpassword/updatepassword/${id}` ,
                                        {password},
                                        config
        )
        dispatch({
            type:"UPDATE_PASSWORD_SUCCESS",
            payload:data
        })
        // console.log(data);
    } catch (error) {
        dispatch({
            type:"UPDATE_PASSWORD_FAIELD",
            payload:error.message
        })
    }
}