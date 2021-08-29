const initialstate = {
    books:[],
    loading:true,
    data:{},
    approvedLoading: false,
    deletedLoading: false
}
export const imageShowToSuperAdminReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "IMAGE_SHOW_TO_SUPERADMIN":
            return{
                books:action.payload,
                loading:false,
            }
        default:
            return state;
    }
}


export const imageApprovedReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case "IMAGE_APPROVED_REQUEST":
            return{
                approvedLoading: true,
            }
            case "IMAGE_APPROVED_SUCCESS":
                return{
                    approvedLoading: false,
                    data:action.payload
                }
            case "IMAGE_APPROVED_FAIELD":
                return{
                    approvedLoading:false,
                    data:action.payload
                }
                
    
        default:
            return state;
    }
}

export const imageDeletedReducer = (state = initialstate, action) =>{
    switch (action.type) {
        case "IMAGE_DELETED_REQUEST":
            return{
                deletedLoading: true
            }
            case "IMAGE_DELETED_SUCCESS":
                return{
                    deletedLoading:false,
                    data:action.payload
                }
            case "IMAGE_DELETED_FAIELD":
                return{
                    deletedLoading:false,
                    data:action.payload
                }
                
    
        default:
            return state;
    }
}