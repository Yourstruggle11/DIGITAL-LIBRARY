import express from 'express'
import {
    getUserAssetsImage,
    getAdminAssetsImage,
    getSuperAdminAssetsImage,
    postAssetsImage,
    updateAssetsImage,
    deleteAssetsImage
} from '../controller/imageAssetsController.js'
const route = express.Router()

route.get('/users', getUserAssetsImage)
route.get('/admin/:id', getAdminAssetsImage)
route.get('/superadmin', getSuperAdminAssetsImage)
route.post('/', postAssetsImage)
route.put('/:id', updateAssetsImage)
route.delete('/:id', deleteAssetsImage)

export default route
