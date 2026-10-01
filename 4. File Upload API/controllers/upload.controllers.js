import uploadToCloudinary from "./cloudinary.controllers.js";

const uploadFile = async (req, res, next) => {
    try{
       const file = req.files;

       if(!file){
        return res.status(404).json(
            {
                success: false,
                message: "File not found"
            }
        )
       }

       console.log("file received in memory :", {
        filename: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
       });

      // this is used when files are stored only in RAM storage
      /* const filesInfo = file.map(file => ({
            filename: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
       })); */

       const uploadPromises = file.map(file => uploadToCloudinary(file.buffer));
       const cloudinaryResult = await Promise.all(uploadPromises);
       const uploadURLs = cloudinaryResult.map(result => result.secure_url);
       const uploadIDs = cloudinaryResult.map(result => result.public_id);

       return res.status(200).json(
        {
            success: true,
            message: "file uploaded and recieved successfully",
            fileInfo: {
                public_id : uploadIDs,
                url: uploadURLs
            }
        }
       )
    }catch(error){
        next(error);
    }
}

export default uploadFile;