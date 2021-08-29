
const initialstate = {
    data: {},
    books:[],
    loading:true
}
export const imageUploadReducer = (state=initialstate, action) =>{
    switch (action.type) {
        case "IMAGE_UPLOAD_REQUEST":
            return{
                loading:true,
            }
        case "IMAGE_UPLOAD_SUCCESS":
        return{
            data:action.payload,
            loading:false,
        }
        case "IMAGE_UPLOAD_FAIELD":
        return{
            data:{},
            loading:false,
        }
        case "IMAGE_SHOW_TO_USER":
            return{
                books: action.payload
            }
    
        default:
            return state;
    }
}