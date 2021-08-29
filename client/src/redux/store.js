import {createStore,applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//import all reducers
import {adminRegistrationReducer, adminAccountActivationReducer, adminLoginReducer, adminPdfApprovedReducer,adminImageApprovedReducer,adminVideoApprovedReducer,adminAccountDeleteReducer} from "./reducers/adminReducer"
import{sendRecoveryEmailReducer,updatePasswordReducer} from "./reducers/forgotPasswordReducer"
import {pdfUploadReducer} from "../redux/reducers/pdfReducer"
import {imageUploadReducer} from "../redux/reducers/imageReducer"
import {videoUploadReducer} from "../redux/reducers/videoReducer"




const rootReducer = combineReducers({
    adminRegistration :adminRegistrationReducer,
    adminAccountActivation :adminAccountActivationReducer,
    adminLogin :adminLoginReducer,
    adminPdfApproved :adminPdfApprovedReducer,
    adminImageApproved :adminImageApprovedReducer,
    adminVideoApproved :adminVideoApprovedReducer,
    pdfUpload: pdfUploadReducer,
    imageUpload: imageUploadReducer,
    videoUpload: videoUploadReducer,
    adminAccountDelete:adminAccountDeleteReducer,
    sendRecoveryEmail:sendRecoveryEmailReducer,
    updatePassword:updatePasswordReducer
})



//getting admin data from local storage
const adminInfoFromLocalStorage = JSON.parse(localStorage.getItem("adminInfo"));
const otpForResetPasswordFromLocalStorage = JSON.parse(localStorage.getItem("otpForResetPassword"))

const initialState = {
    adminLogin:{
        adminInfo: adminInfoFromLocalStorage
    },
    sendRecoveryEmail:{
        otpForResetPassword:otpForResetPasswordFromLocalStorage
    }
}

const middleware = [thunk]

//Creating store
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;