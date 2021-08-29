const initialstate = {
    books:[],
    loading:true,
    data:{},
}
export const pdfShowToSuperAdminReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "PDF_SHOW_TO_SUPERADMIN":
            return{
                books:action.payload,
                loading:false,

            }
        default:
            return state;
    }
}
export const pdfApprovedReducer = (state = {
    data:{},
    approvedLoading: false,
}, action) =>{
    switch (action.type) {
        case "PDF_APPROVED_REQUEST":
            return{
                approvedLoading: true,
            }
            case "PDF_APPROVED_SUCCESS":
                return{
                    approvedLoading: false,
                    data:action.payload
                }
            case "PDF_APPROVED_FAIELD":
                return{
                    approvedLoading: false,
                    data:action.payload
                }
                
    
        default:
            return state;
    }
}

export const pdfDeletedReducer = (state = {
    data:{},
    deletedLoading: false
}, action) =>{
    switch (action.type) {
        case "PDF_DELETED_REQUEST":
            return{
                deletedLoading: true
            }
            case "PDF_DELETED_SUCCESS":
                return{
                    deletedLoading:false,
                    data:action.payload
                }
            case "PDF_DELETED_FAIELD":
                return{
                    deletedLoading:false,
                    data:action.payload
                }
                
    
        default:
            return state;
    }
}