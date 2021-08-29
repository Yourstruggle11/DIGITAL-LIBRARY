const initialstate = {
    books:[],
    loading:true,
    data:{},
    approvedLoading: false,
    deletedLoading: false
}
export const videoShowToSuperAdminReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "VIDEO_SHOW_TO_SUPERADMIN":
            return{
                books:action.payload,
                loading:false,
            }
        default:
            return state;
    }
}

export const videoApprovedReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case "VIDEO_APPROVED_REQUEST":
            return{
                approvedLoading: true,
            }
            case "VIDEO_APPROVED_SUCCESS":
                return{
                    approvedLoading:false,
                    data:action.payload
                }
            case "VIDEO_APPROVED_FAIELD":
                return{
                    approvedLoading:false,
                    data:action.payload
                }
                
    
        default:
            return state;
    }
}

export const videoDeletedReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case "VIDEO_DELETED_REQUEST":
            return{
                deletedLoading: true
            }
            case "VIDEO_DELETED_SUCCESS":
                return{
                    deletedLoading:false,
                    data:action.payload
                }
            case "VIDEO_DELETED_FAIELD":
                return{
                    deletedLoading:false,
                    data:action.payload
                }
                
    
        default:
            return state;
    }
}