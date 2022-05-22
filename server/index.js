import express from "express";
import env from "dotenv";
import cors from "cors";
import morgan from "morgan";
import dbConnection from "./config/DB.js";
import bodyParser from "body-parser";


//import routes
import homeRoute from "./routes/homeRoute.js"
import pdfAssetsRoute from "./routes/pdfAssetsRoute.js"
import imageAssetsRoute from "./routes/imageAssetsRoute.js"
import videoAssetsRoute from "./routes/videoAssetsRoute.js"
import adminAccount from './routes/adminAccountRoute.js'
import forgotPassword from "./routes/forgotPasswordRoute.js"
import { errorhandler, notFound } from "./middlewares/errorHandler.js";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
env.config();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


//connect to the database
dbConnection();

//routes
app.use("/", homeRoute);
app.use("/assets/pdf", pdfAssetsRoute)
app.use("/assets/image", imageAssetsRoute)
app.use("/assets/video", videoAssetsRoute)

//admin account route
app.use("/admin", adminAccount)

//forgot password route
app.use("/admin/forgotpassword", forgotPassword)


//For Error Handling
app.use(notFound)
app.use(errorhandler)



// making the port dynamic
const PORT = process.env.PORT || 5001


//starting the server
app.listen(PORT, function () {
    console.log(`server has started at port no ${PORT}`);
})