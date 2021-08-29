import axios from "axios";

export const superAdminLogin = (email,password) => async (dispatch) =>{
    try {
        dispatch({
            type:"SUPERADMIN_LOGIN_REQUEST",
        });
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.post(
            "https://digital-library-server.herokuapp.com/admin/login",
            {email, password},
            config
        )
        localStorage.setItem("superAdminInfo", JSON.stringify(data));
        dispatch({
            type:"SUPERADMIN_LOGIN_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"SUPERADMIN_LOGIN_FAIELD",
            payload: error.message
        })   
    }
}

// logout action
export const SuperAdminLogout = () => (dispatch) => {
    localStorage.removeItem("superAdminInfo");
    dispatch({
      type: "SUPERADMIN_LOGOUT",
    });
  };