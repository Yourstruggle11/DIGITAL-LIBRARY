import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunk from "redux-thunk";

import {superAdminLoginReducer} from "./reducers/superAdminReducers"
import {pdfShowToSuperAdminReducer, pdfApprovedReducer,pdfDeletedReducer} from "./reducers/pdfReducer"
import {imageShowToSuperAdminReducer, imageApprovedReducer, imageDeletedReducer} from "./reducers/imageReducer"
import {videoShowToSuperAdminReducer, videoApprovedReducer, videoDeletedReducer} from "./reducers/videoReducer"



const rootReducer = combineReducers({
    superAdminLogin :superAdminLoginReducer,
    pdfShowToSuperAdmin:pdfShowToSuperAdminReducer,
    imageShowToSuperAdmin:imageShowToSuperAdminReducer,
    videoShowToSuperAdmin:videoShowToSuperAdminReducer,
    pdfApproved:pdfApprovedReducer,
    pdfDeleted:pdfDeletedReducer,
    imageApproved:imageApprovedReducer,
    imageDeleted:imageDeletedReducer,
    videoApproved:videoApprovedReducer,
    videoDeleted:videoDeletedReducer,
})


//getting superadmin data from local storage
const superadminInfoFromLocalStorage = JSON.parse(localStorage.getItem("superAdminInfo"));
const initialState ={
    superAdminLogin:{
        SuperAdminInfo: superadminInfoFromLocalStorage
    },
}
// console.log(superAdminInfo);


const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;