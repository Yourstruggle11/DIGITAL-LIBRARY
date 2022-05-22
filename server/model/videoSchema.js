import mongoose from 'mongoose'

const Schema = mongoose.Schema

const videoSchema = new Schema({
    adminName: { type: String, required: true },
    adminId: { type: String, require: true },
    fileName: { type: String, required: true },
    Date: { type: String },
    LINK: { type: String, required: true },
    status: { type: Boolean }
})

const videoAssets = mongoose.model('DigitalLibraryAssetVideo', videoSchema)

export default videoAssets
