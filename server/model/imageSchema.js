import mongoose from "mongoose";


const Schema = mongoose.Schema;

const imageSchema = new Schema({
            adminName: { type: String, required: true },
            adminId:{type: String, require:true},
            fileName: { type: String, required: true },
            Date: {type: String},
            LINK: { type: String, required: true },
            status:{ type: Boolean }
})

const imageAssets = mongoose.model("DigitalLibraryAssetImage", imageSchema)

export default imageAssets;