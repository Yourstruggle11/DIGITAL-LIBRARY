import express from "express"
import pdfAssetsRoute from './pdfAssetsRoute.js'
import imageAssetsRoute from './imageAssetsRoute.js'
import videoAssetsRoute from './videoAssetsRoute.js'


const router = express.Router()


router.use('/assets/pdf', pdfAssetsRoute)
router.use('/assets/image', imageAssetsRoute)
router.use('/assets/video', videoAssetsRoute)

export default router;
