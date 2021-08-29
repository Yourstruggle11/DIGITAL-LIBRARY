import adminAccount from "../model/adminAcSchema.js"
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer"
import {google} from "googleapis"
import env from "dotenv";

env.config();


//@route: POST /admin/signup
//@purpose: : post routes for create admin account
export const registerAdmin = async (req, res, next) => {
    const { username, email, password } = req.body;

    const adminExist = await adminAccount.findOne({ email: email });
    if (adminExist) {
        res.status(404);
        const err = new Error("Admin with this same email already exist!");
        next(err);
    }
    else {
        //creatin random four digit number for emailVerificationOtp
        const emailVerificationOtp = Math.floor(1000 + Math.random() * 9000);
        const createAdminAccount = await adminAccount.create({
            username,
            email,
            password,
        });
        if (createAdminAccount) {
            res.json({
                _id: createAdminAccount._id,
                name: createAdminAccount.username,
                email: createAdminAccount.email,
                emailVerificationOtp: emailVerificationOtp

            });


            //sending verification email to admin

            const CLIENT_ID =  "133611211271-5g70nf2ksrk8tmikbpk3lj72tme0e791.apps.googleusercontent.com"
            const CLIENT_SECRET = "xh0Hl07ddTCokVZPivOV7SjI"
            const REDIReCT_URI = "https://developers.google.com/oauthplayground"
            const REFRESH_TOKEN = "1//04sUTDnTQQ0Q4CgYIARAAGAQSNwF-L9IrPw_qH1uImvi4UlYqMAkHYUE0IILHrRj9hn29tAEPy7nLEsIRYnA_JaxQEy2u7bj28T0"

            const oAuth2Clint = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIReCT_URI)
            oAuth2Clint.setCredentials({refresh_token: REFRESH_TOKEN})



            async function sendmail(){
                try {
                    const accessToken = await oAuth2Clint.getAccessToken()

                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            type: "OAuth2", 
                            user: "souviksen093@gmail.com",
                            pass: process.env.PASS,
                            clientId: CLIENT_ID,
                            clientSecret: CLIENT_SECRET,
                            refreshToken:REFRESH_TOKEN,
                            accessToken: accessToken
                        }
                    });

                    const mailOptions = {
                        from: 'Digital Library <souviksen093@gmail.com>',
                        to: createAdminAccount.email,
                        subject: 'Email varification For admin account at Digital Library',
                        html: `<div style="width:100%; height:100%; color:white; background:url("https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBsaWJyYXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");"><h2>Hi ${createAdminAccount.username}!</h2>
                        <p>Your verification code is <b> ${emailVerificationOtp} </b>.</p>
                        <p>Enter this code in our DIGITAL LIBRARY to activate your ADMIN account.If you have any questions, send us an email or send us message. </p>
                       <p> We are glad you are here!</p>
                        <p><b>The team DIGITAL LIBRARY </b></p></div>`
                        
                    };

                    const result = await transporter.sendMail(mailOptions)
                    return result
                } catch (error) {
                    return error
                }
            }

            sendmail().then(result=> console.log("email sent..", result)).catch(error => console.log(error.message))
        }
        else {
            res.status(404);
            const err = new Error("invalid data!");
            next(err);
        }
    }

}

//@route: POST /admin/login
//@purpose: : post routes for help admin to login
export const loginAdmin = async (req, res, next) => {
    const { email, password } = req.body;

    const checkEmail = await adminAccount.findOne({ email: email });

    if (checkEmail) {
        const checkActivation = await adminAccount.find({
            email: { $eq: email },
            status: { $eq: true }
        });
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if (!isEmpty(checkActivation)) {
            const checkPassword = await bcrypt.compare(password, checkEmail.password)
            if (checkPassword) {
                res.json({
                    _id: checkEmail._id,
                    name: checkEmail.username,
                    email: checkEmail.email
                })
            }
            else {
                res.status(401);
                const err = new Error("Invalid password!");
                next(err)
            }
        }
        else {
            res.status(401);
            const err = new Error("Opps seems your account is not activated yet!");
            next(err)
        }
    }
    else {
        res.status(404);
        const err = new Error("No admin available with this email!");
        next(err)
    }

}


//@route: GET /admin/
//@purpose: : get routes for get all admin account
export const getAdmin = async (req, res, next) => {

    try {
        const getAdminAccount = await adminAccount.find();
        res.status(200).json(getAdminAccount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


//@route: DELETE /admin/
//@purpose: : delete routes for delete admin account
export const deleteAdmin = async (req, res, next) => {
    const { id: id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send("no admin found!")
    }
    else {
        try {
            await adminAccount.findByIdAndDelete(id);
            res.status(200).json({ message: "admin account deleted successfully.." })
        } catch (error) {
            res.status(404).json({ message: error.message })

        }
    }
}


//@route: PUT /admin/accountActivation
//@purpose: : update routes for activate admin account
export const accountActivation = async (req, res, next) => {
    const { id: id } = req.params;
    const activeAdminAccount = await adminAccount.findByIdAndUpdate(id, { "status": true }, {
        new: true,
    })
    if (activeAdminAccount) {
        res.json(activeAdminAccount);

    }
    else {
        res.status(404);
        const err = new Error("Something went wrong!");
        next(err)
    }
}
