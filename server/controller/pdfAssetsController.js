import pdfAssets from "../model/pdfSchema.js"


export const getUserAssetsPdf = async (req, res, next) =>{
    try {
        const fetchAssets = await pdfAssets.find({status:{$eq: true} })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}

//@route: GET /assets/admin
//@purpose: : get routes for get notes for admin

export const getAdminAssetsPdf = async (req, res, next) =>{
    var {id} = req.params
    try {
        const fetchAssets = await pdfAssets.find({
            adminId:{$eq: id},
            status:{$eq: true}
        })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}

export const getSuperAdminAssetsPdf = async (req, res, next) =>{
    try {
        const fetchAssets = await pdfAssets.find({status:{$eq: false} })
        res.status(200).json(fetchAssets)
    } catch (error) {
        res.status(404);
        next(error);
    }
}



//@route: POST /assets/pdf
//@purpose: : Post new note by admin

export const postAssetsPdf = async (req, res, next) =>{
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
    var newAsset = new pdfAssets(newpost);
    try {
        await newAsset.save();
        res.status(201).json(newAsset);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log("ERROR");
    }
}


//@route: POST /assets/pdf/:id
//@purpose: : review and update by superadmin
export const updateAssetsPdf = async (req, res, next) =>{
    const {id: id} = req.params;

    const updateStatus = await pdfAssets.findByIdAndUpdate(id,{"status":true},{
        new:true,
    })
    res.json(updateStatus);
}

//@route: POST /assets/pdf/:id
//@purpose: : review and delete by superadmin
export const deleteAssetsPdf = async (req, res, next) =>{
    try {
        const deletePost = await pdfAssets.deleteOne({
            _id: req.params.id
        })
        res.status(200).json(deletePost);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next(error);
        console.log("ERROR");   
    }
}