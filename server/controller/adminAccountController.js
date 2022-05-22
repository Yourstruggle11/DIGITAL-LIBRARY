import adminAccount from '../model/adminAcSchema.js'
import adminRegistrationMailer from "../mailer/adminRegistrationMailer.js";
import isEmpty from "../utils/isEmpty.js";
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import env from 'dotenv'

env.config()

//@route: POST /admin/signup
//@purpose: : post routes for create admin account
export const registerAdmin = async (req, res, next) => {
    const { username, email, password } = req.body

    const adminExist = await adminAccount.findOne({ email: email })
    if (adminExist) {
        res.status(404)
        const err = new Error('Admin with this same email already exist!')
        next(err)
    } else {
        //creatin random four digit number for emailVerificationOtp
        const emailVerificationOtp = Math.floor(1000 + Math.random() * 9000)
        const createAdminAccount = await adminAccount.create({
            username,
            email,
            password
        })
        if (createAdminAccount) {
            res.json({
                _id: createAdminAccount._id,
                name: createAdminAccount.username,
                email: createAdminAccount.email,
                emailVerificationOtp: emailVerificationOtp
            })

            //sending verification email to admin

            adminRegistrationMailer(createAdminAccount,emailVerificationOtp)
                .then((result) => console.log('email sent..', result))
                .catch((error) => console.log(error.message))
        } else {
            res.status(404)
            const err = new Error('invalid data!')
            next(err)
        }
    }
}

//@route: POST /admin/login
//@purpose: : post routes for help admin to login
export const loginAdmin = async (req, res, next) => {
    const { email, password } = req.body

    const checkEmail = await adminAccount.findOne({ email: email })

    if (checkEmail) {
        const checkActivation = await adminAccount.find({
            email: { $eq: email },
            status: { $eq: true }
        })
        if (!isEmpty(checkActivation)) {
            const checkPassword = await bcrypt.compare(password, checkEmail.password)
            if (checkPassword) {
                res.json({
                    _id: checkEmail._id,
                    name: checkEmail.username,
                    email: checkEmail.email
                })
            } else {
                res.status(401)
                const err = new Error('Invalid password!')
                next(err)
            }
        } else {
            res.status(401)
            const err = new Error('Opps seems your account is not activated yet!')
            next(err)
        }
    } else {
        res.status(404)
        const err = new Error('No admin available with this email!')
        next(err)
    }
}

//@route: GET /admin/
//@purpose: : get routes for get all admin account
export const getAdmin = async (req, res, next) => {
    try {
        const getAdminAccount = await adminAccount.find()
        res.status(200).json(getAdminAccount)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//@route: DELETE /admin/
//@purpose: : delete routes for delete admin account
export const deleteAdmin = async (req, res, next) => {
    const { id: id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send('no admin found!')
    } else {
        try {
            await adminAccount.findByIdAndDelete(id)
            res.status(200).json({ message: 'admin account deleted successfully..' })
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
}

//@route: PUT /admin/accountActivation
//@purpose: : update routes for activate admin account
export const accountActivation = async (req, res, next) => {
    const { id: id } = req.params
    const activeAdminAccount = await adminAccount.findByIdAndUpdate(
        id,
        { status: true },
        {
            new: true
        }
    )
    if (activeAdminAccount) {
        res.json(activeAdminAccount)
    } else {
        res.status(404)
        const err = new Error('Something went wrong!')
        next(err)
    }
}
