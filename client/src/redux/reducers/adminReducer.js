  //reducer for admin registration
  export const adminRegistrationReducer = ( state = {
    loading: false,
    serverError: null,
    userInfo:null,
    emailCheck:false
  }, action) =>{
      switch (action.type) {
          case "ADMIN_REGISTRATION_REQUEST":
              return{
                loading:true,
                serverError: null,
                emailCheck:false
              }
        case "ADMIN_REGISTRATION_SUCCESS":
            return{
                loading: false,
                serverError: null,
                userInfo:action.payload,
                emailCheck:true
            }
      case "ADMIN_REGISTRATION_FAIELD":
          return{
              loading:false,
              serverError: action.payload,
              emailCheck:false
          }
          default:
             return state;
      }
  }

  export const adminAccountActivationReducer = (state={
     data: {},
  }, action) =>{
    switch (action.type) {
        case "ACTIVE_ACCOUNT":
            return {
                data: action.payload
            }
    
        default:
            return state;
    }
  }


  export const adminAccountDeleteReducer = (state={
    data: {},
 }, action) =>{
   switch (action.type) {
       case "DELETE_ACCOUNT":
           return {
               data: action.payload
           }
   
       default:
           return state;
   }
 }


  const initialValue = {
    serverError: false,
    isAuthenticate: false,
    loading: false,
 }
  export const adminLoginReducer = (state={initialValue}, action) =>{
    switch (action.type) {
        case "ADMIN_LOGIN_REQUEST":
            return{
                serverError: false,
                isAuthenticate: false,
                loading: true,
            }
        case "ADMIN_LOGIN_SUCCESS":
            return{
                serverError: false,
                isAuthenticate: true,
                loading: false,
                adminInfo: action.payload,
        
                
            }
        case "ADMIN_LOGIN_FAIELD":
            return{
                loading: false,
               serverError: action.payload,
            }
        case "ADMIN_LOGOUT":
            return{
                isAuthenticate: false,

            }
            
    
        default:
            return state;
    }
  }

  const initialstate = {
    pdfBooks:[],
    imageBooks:[],
    videoBooks:[],
    PdfLoading:true,
    imageLoading:true,
    videoPdfLoading:true,

}
  export const adminPdfApprovedReducer = (state = initialstate, action) =>{
        switch (action.type) {
            case "ADMIN_PDF_APPROVED":
                return{
                    pdfBooks:action.payload,
                    pdfLoading:false
                }
                
        
            default:
                return state;
        }
  }

  export const adminImageApprovedReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case "ADMIN_IMAGE_APPROVED":
            return{
                imageBooks:action.payload,
                imageLoading:false
            }
            
    
        default:
            return state;
    }
}

export const adminVideoApprovedReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case "ADMIN_VIDEO_APPROVED":
            return{
                videoBooks:action.payload,
                videoLoading:false
            }
            
    
        default:
            return state;
    }
}