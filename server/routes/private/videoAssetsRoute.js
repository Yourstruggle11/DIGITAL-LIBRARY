import express from 'express'
import {
    postAssetsVideo,
    updateAssetsVideo,
    deleteAssetsVideo
} from '../../controller/videoAssetsController.js'
const route = express.Router()


route.post('/', postAssetsVideo)
route.put('/:id', updateAssetsVideo)
route.delete('/:id', deleteAssetsVideo)

export default route
