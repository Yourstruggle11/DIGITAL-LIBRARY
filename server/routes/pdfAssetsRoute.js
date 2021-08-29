import express from "express";
import {
    getUserAssetsPdf,
    getAdminAssetsPdf,
    getSuperAdminAssetsPdf,
    postAssetsPdf,
    updateAssetsPdf,
    deleteAssetsPdf
} from "../controller/pdfAssetsController.js"
const route = express.Router();

route.get("/users", getUserAssetsPdf)
route.get("/admin/:id", getAdminAssetsPdf)
route.get("/superadmin", getSuperAdminAssetsPdf)
route.post("/", postAssetsPdf)
route.put("/:id", updateAssetsPdf)
route.delete("/:id", deleteAssetsPdf)



export default route;