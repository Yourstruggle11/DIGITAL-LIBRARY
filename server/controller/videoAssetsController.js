import videoAssets from "../model/videoSchema.js"


export const getUserAssetsVideo = async (req, res, next) =>{
    try {
        const fetchAssets = await videoAssets.find({status:{$eq: true} })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}

//@route: GET /assets/admin
//@purpose: : get routes for get notes for admin

export const getAdminAssetsVideo = async (req, res, next) =>{
    var {id} = req.params
    try {
        const fetchAssets = await videoAssets.find({
            adminId:{$eq: id},
            status:{$eq: true}
        })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}

export const getSuperAdminAssetsVideo = async (req, res, next) =>{
    try {
        const fetchAssets = await videoAssets.find({status:{$eq: false} })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}



//@route: POST /assets/video
//@purpose: : Post new note by admin

export const postAssetsVideo = async (req, res, next) =>{
    var {
        adminName,
        adminId,
        fileName,
        Date,
        LINK,
        status
    } = req.body;
    
    const newpost = 
           {
                adminName: adminName,
                adminId: adminId,
                fileName: fileName,
                Date: Date,
                LINK: LINK,
                status: status  
            }
    var newAsset = new videoAssets(newpost);
    try {
        await newAsset.save();
        res.status(201).json(newAsset);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log("ERROR");
    }
}


//@route: POST /assets/video/:id
//@purpose: : review and update by superadmin
export const updateAssetsVideo = async (req, res, next) =>{
    const {id: id} = req.params;

    const updateStatus = await videoAssets.findByIdAndUpdate(id,{"status":true},{
        new:true,
    })
    res.json(updateStatus);
}

//@route: POST /assets/video/:id
//@purpose: : review and delete by superadmin
export const deleteAssetsVideo = async (req, res, next) =>{
    try {
        const deletePost = await videoAssets.deleteOne({
            _id: req.params.id
        })
        res.status(200).json(deletePost);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next(error);
        console.log("ERROR");   
    }
}