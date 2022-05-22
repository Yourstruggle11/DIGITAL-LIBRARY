import express from 'express'
import adminAccount from './adminAccountRoute.js'
import forgotPassword from './forgotPasswordRoute.js'

const router = express.Router()




//admin account route
router.use('/admin', adminAccount)

//forgot password route
router.use('/admin/forgotpassword', forgotPassword)

export default router
