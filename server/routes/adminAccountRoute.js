import express from 'express'
import {
    registerAdmin,
    loginAdmin,
    getAdmin,
    deleteAdmin,
    accountActivation
} from '../controller/adminAccountController.js'
const route = express.Router()

route.post('/signup', registerAdmin)
route.post('/login', loginAdmin)
route.get('/', getAdmin)
route.delete('/:id', deleteAdmin)
route.put('/accountActivation/:id', accountActivation)

export default route
