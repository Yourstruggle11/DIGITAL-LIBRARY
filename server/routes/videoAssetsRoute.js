import express from "express";
import {
    getUserAssetsVideo,
    getAdminAssetsVideo,
    getSuperAdminAssetsVideo,
    postAssetsVideo,
    updateAssetsVideo,
    deleteAssetsVideo
} from "../controller/videoAssetsController.js"
const route = express.Router();

route.get("/users", getUserAssetsVideo)
route.get("/admin/:id", getAdminAssetsVideo)
route.get("/superadmin", getSuperAdminAssetsVideo)
route.post("/", postAssetsVideo)
route.put("/:id", updateAssetsVideo)
route.delete("/:id", deleteAssetsVideo)



export default route;