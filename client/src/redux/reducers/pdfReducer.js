
const initialstate = {
    data: {},
    books:[],
    loading:true
}
export const pdfUploadReducer = (state=initialstate, action) =>{
    switch (action.type) {
        case "PDF_UPLOAD_REQUEST":
            return{
                loading:true,
            }
        case "PDF_UPLOAD_SUCCESS":
        return{
            data:action.payload,
            loading:false,
        }
        case "PDF_UPLOAD_FAIELD":
        return{
            data:{},
            loading:false,

        }
        case "PDF_SHOW_TO_USER":
            return{
                books: action.payload
            }
    
        default:
            return state;
    }
}