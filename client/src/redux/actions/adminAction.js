import axios from "axios";


const API = process.env.REACT_APP_API


export const adminRegistration = (username, email, password) => async (dispatch) =>{
    try {
        dispatch({
            type:"ADMIN_REGISTRATION_REQUEST",
        });
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.post(
                                        `${API}/admin/signup` ,
                                        {username, email, password},
                                        config
                                        );
        dispatch({
            type:"ADMIN_REGISTRATION_SUCCESS",
            payload: data,
        })
        const now = new Date()
        const item = {
            value: data,
            expiry: now.getTime() + 600000
        }
        localStorage.setItem("registratinInfo", JSON.stringify(item));
    } catch (error) {
        dispatch({
            type:"ADMIN_REGISTRATION_FAIELD",
            payload: error.message,
        })
    }
}

export const adminAccountActivation = (id) => async (dispatch) =>{
    try {
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.put(
            `${API}/admin/accountActivation/${id}`,
            config
        )
        dispatch({
            type:"ACTIVE_ACCOUNT",
            payload:data
        })
    } catch (error) {
        
    }
}
export const adminAccountDelete = (id) => async (dispatch) =>{
    try {
        const config = {
            "Content-type": "application/json",    
        }
        const {data} = await axios.delete(
            `${API}/admin/${id}`,
            config
        )
        dispatch({
            type:"DELETE_ACCOUNT",
            payload:data
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const adminLogin = (email, password) => async (dispatch) =>{
    try {
        dispatch({
            type:"ADMIN_LOGIN_REQUEST",
        });
        const config = {
            "Content-type": "application/json",    
        }
        const { data } = await axios.post(
            `${API}/admin/login`,
            {email,password},
            config,

        )
            // console.log(data);
        dispatch({
            type:"ADMIN_LOGIN_SUCCESS",
            payload:data
            
        })
        localStorage.setItem("adminInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type:"ADMIN_LOGIN_FAIELD",
            payload: error.message
        })
    }
}


// logout action
export const adminLogout = () => (dispatch) => {
    localStorage.removeItem("adminInfo");
    dispatch({
      type: "ADMIN_LOGOUT",
    });
  };



  //admin pdf approval action
  export const adminPdfApproved = (id) => async (dispatch) =>{

    try {

        const config = {
            "Content-type": "application/json",    
        }

        const {data} = await axios.get(
            `${API}/assets/pdf/admin/${id}`, 
            config)
        // console.log("data : ", data);
        dispatch({
            type: "ADMIN_PDF_APPROVED",
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
  }

    //admin image approval action
    export const adminImageApproved = (id) => async (dispatch) =>{

        try {
    
            const config = {
                "Content-type": "application/json",    
            }
    
            const {data} = await axios.get(
                `${API}/assets/image/admin/${id}`, 
                config)
            // console.log("data : ", data);
            dispatch({
                type: "ADMIN_IMAGE_APPROVED",
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
      }

        //admin imagvideoe approval action
        export const adminVideoApproved = (id) => async (dispatch) =>{

            try {
        
                const config = {
                    "Content-type": "application/json",    
                }
        
                const {data} = await axios.get(
                    `${API}/assets/video/admin/${id}`, 
                    config)
                //  console.log("data : ", data);
                dispatch({
                    type: "ADMIN_VIDEO_APPROVED",
                    payload: data
                })
            } catch (error) {
                console.log(error.message);
            }
          }