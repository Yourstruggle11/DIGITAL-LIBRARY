import imageAssets from "../model/imageSchema.js"


export const getUserAssetsImage = async (req, res, next) =>{
    try {
        const fetchAssets = await imageAssets.find({status:{$eq: true} })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}

//@route: GET /assets/admin
//@purpose: : get routes for get notes for admin

export const getAdminAssetsImage = async (req, res, next) =>{
    var {id} = req.params
    try {
        const fetchAssets = await imageAssets.find({
            adminId:{$eq: id},
            status:{$eq: true}
        })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}

export const getSuperAdminAssetsImage = async (req, res, next) =>{
    try {
        const fetchAssets = await imageAssets.find({status:{$eq: false} })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}



//@route: POST /assets/image
//@purpose: : Post new note by admin

export const postAssetsImage = async (req, res, next) =>{
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
    var newAsset = new imageAssets(newpost);
    try {
        await newAsset.save();
        res.status(201).json(newAsset);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log("ERROR");
    }
}


//@route: POST /assets/image/:id
//@purpose: : review and update by superadmin
export const updateAssetsImage = async (req, res, next) =>{
    const {id: id} = req.params;

    const updateStatus = await imageAssets.findByIdAndUpdate(id,{"status":true},{
        new:true,
    })
    res.json(updateStatus);
}

//@route: POST /assets/image/:id
//@purpose: : review and delete by superadmin
export const deleteAssetsImage = async (req, res, next) =>{
    try {
        const deletePost = await imageAssets.deleteOne({
            _id: req.params.id
        })
        res.status(200).json(deletePost);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next(error);
        console.log("ERROR");   
    }
}