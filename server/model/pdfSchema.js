import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pdfSchema = new Schema({
    adminName: { type: String, required: true },
    adminId: { type: String, require: true },
    fileName: { type: String, required: true },
    Date: { type: String, required: true },
    LINK: { type: String, required: true },
    status: { type: Boolean }
})

const pdfAssets = mongoose.model('DigitalLibraryAssetPdf', pdfSchema)

export default pdfAssets
