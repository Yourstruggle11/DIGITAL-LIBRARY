import express from 'express'
import {
    getUserAssetsPdf,
    getAdminAssetsPdf,
    getSuperAdminAssetsPdf,
} from '../../controller/pdfAssetsController.js'
const route = express.Router()

route.get('/users', getUserAssetsPdf)
route.get('/admin/:id', getAdminAssetsPdf)
route.get('/superadmin', getSuperAdminAssetsPdf)

export default route
