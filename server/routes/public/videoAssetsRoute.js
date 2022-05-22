import express from 'express'
import {
    getUserAssetsVideo,
    getAdminAssetsVideo,
    getSuperAdminAssetsVideo,
} from '../../controller/videoAssetsController.js'
const route = express.Router()

route.get('/users', getUserAssetsVideo)
route.get('/admin/:id', getAdminAssetsVideo)
route.get('/superadmin', getSuperAdminAssetsVideo)

export default route
