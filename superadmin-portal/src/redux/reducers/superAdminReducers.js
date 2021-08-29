
 const initialValue = {
    serverError: false,
    isAuthenticate: false,
    loading: true,
 }
export const superAdminLoginReducer = (state={initialValue}, action) =>{
    switch (action.type) {
        case "SUPERADMIN_LOGIN_REQUEST":
            return{
                serverError: false,
                isAuthenticate: false,
                loading: true,
        
            }
            case "SUPERADMIN_LOGIN_SUCCESS":
            return{
                serverError: false,
                isAuthenticate: true,
                loading: false,
                SuperAdminInfo: action.payload,
        
                
            }
            case "SUPERADMIN_LOGIN_FAIELD":
                return{
                    loading: false,
                    serverError: action.payload,
                }
                case "SUPERADMIN_LOGOUT":
                    return{
                        isAuthenticate: false,
                    }
    
        default:
            return state;
    }
}