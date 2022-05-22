import express from 'express'
import {
    postAssetsPdf,
    updateAssetsPdf,
    deleteAssetsPdf
} from '../../controller/pdfAssetsController.js'
const route = express.Router()

route.post('/', postAssetsPdf)
route.put('/:id', updateAssetsPdf)
route.delete('/:id', deleteAssetsPdf)

export default route
