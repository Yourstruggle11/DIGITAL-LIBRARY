import express from 'express'
import {
    postAssetsImage,
    updateAssetsImage,
    deleteAssetsImage
} from '../../controller/imageAssetsController.js'
const route = express.Router()


route.post('/', postAssetsImage)
route.put('/:id', updateAssetsImage)
route.delete('/:id', deleteAssetsImage)

export default route
