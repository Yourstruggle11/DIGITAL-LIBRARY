import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import env from 'dotenv'

env.config()

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Clint = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Clint.setCredentials({ refresh_token: REFRESH_TOKEN })

export default async function sendmail(body, id) {
    const { admin, otp } = body
    try {
        const accessToken = await oAuth2Clint.getAccessToken()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                pass: process.env.PASS,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'Digital Library <souviksen093@gmail.com>',
            to: admin.email,
            subject:
                'Email varification For admin account at Digital Library',
            html: `<div style="width:100%; height:100%; color:white; background:url("https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBsaWJyYXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");"><h2>Hi ${admin.username}!</h2>
            <p>Your verification code is <b> ${otp} </b>.</p>
            <p>Enter this code in our DIGITAL LIBRARY to activate your ADMIN account.If you have any questions, send us an email or send us message. </p>
           <p> We are glad you are here!</p>
            <p><b>The team DIGITAL LIBRARY </b></p></div>`
        }

        const result = await transporter.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}
