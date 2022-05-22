import adminAccount from '../model/adminAcSchema.js'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import env from 'dotenv'

env.config()

export const sendRecoveryMail = async (req, res, next) => {
    const { email } = req.body

    const checkEmail = await adminAccount.findOne({ email: email })
    if (checkEmail) {
        //creatin random four digit number for emailVerificationOtp
        const emailVerificationOtp = Math.floor(1000 + Math.random() * 9000)
        res.json({
            _id: checkEmail._id,
            name: checkEmail.username,
            email: checkEmail.email,
            emailVerificationOtp: emailVerificationOtp
        })
        //sending verification email to admin
        const CLIENT_ID =
            '133611211271-5g70nf2ksrk8tmikbpk3lj72tme0e791.apps.googleusercontent.com'
        const CLIENT_SECRET = 'xh0Hl07ddTCokVZPivOV7SjI'
        const REDIReCT_URI = 'https://developers.google.com/oauthplayground'
        const REFRESH_TOKEN =
            '1//04sUTDnTQQ0Q4CgYIARAAGAQSNwF-L9IrPw_qH1uImvi4UlYqMAkHYUE0IILHrRj9hn29tAEPy7nLEsIRYnA_JaxQEy2u7bj28T0'

        const oAuth2Clint = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIReCT_URI
        )
        oAuth2Clint.setCredentials({ refresh_token: REFRESH_TOKEN })

        async function sendmail() {
            try {
                const accessToken = await oAuth2Clint.getAccessToken()

                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: 'souviksen093@gmail.com',
                        pass: process.env.PASS,
                        clientId: CLIENT_ID,
                        clientSecret: CLIENT_SECRET,
                        refreshToken: REFRESH_TOKEN,
                        accessToken: accessToken
                    }
                })

                const mailOptions = {
                    from: 'Digital Library <souviksen093@gmail.com>',
                    to: checkEmail.email,
                    subject: `${checkEmail.username}, here's your PIN`,
                    html: `<h2>Hi ${checkEmail.username}, </h2>
                            <p>We received a request to reset the password on your <span style="color:#7D7D7D;">DIGITAL</span> <span style="color:#23AFDB;">LIBRARY</span> Account.</p>
                            <h1>${emailVerificationOtp}</h1>
                            <p> Enter this code to complete the reset.</p>
                            <p> Thanks for helping us keep your account secure.
                            The DIGITAL LIBRARY Team</p>`
                }

                const result = await transporter.sendMail(mailOptions)
                return result
            } catch (error) {
                return error
            }
        }

        sendmail()
            .then((result) => console.log('email sent..', result))
            .catch((error) => console.log(error.message))
    } else {
        res.status(404)
        const err = new Error('No admin account found with this email address!')
        next(err)
    }
}

export const updatePassword = async (req, res, next) => {
    const { id } = req.params
    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const upadatePassword = await adminAccount.findByIdAndUpdate(
        id,
        { password: hashedPassword },
        {
            new: true
        }
    )
    res.json(upadatePassword)
}
