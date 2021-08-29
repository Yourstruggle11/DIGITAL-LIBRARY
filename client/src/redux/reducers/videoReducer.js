
const initialstate = {
    data: {},
    loading:true,
    books:[]
}
export const videoUploadReducer = (state=initialstate, action) =>{
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
        case "VIDEO_SHOW_TO_USER":
            return{
                books: action.payload
            }
    
    
        default:
            return state;
    }
}