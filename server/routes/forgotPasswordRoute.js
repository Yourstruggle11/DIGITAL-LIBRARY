import express from "express";
import {updatePassword,sendRecoveryMail} from "../controller/forgotPasswordController.js"

const route = express.Router();

route.post("/sendmail", sendRecoveryMail);
route.put("/updatepassword/:id", updatePassword);




export default route;