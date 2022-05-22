import express from 'express'
import {
    getUserAssetsImage,
    getAdminAssetsImage,
    getSuperAdminAssetsImage,
} from '../../controller/imageAssetsController.js'
const route = express.Router()

route.get('/users', getUserAssetsImage)
route.get('/admin/:id', getAdminAssetsImage)
route.get('/superadmin', getSuperAdminAssetsImage)

export default route
