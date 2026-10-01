import {v2 as cloudinary} from "cloudinary";
import streamifier from "streamifier";

const updateUpload = async (req, res, next) => {
    try {
      const { id } = req.body;
      const file = req.files;

      if(!id || !file){
        return res.status(404).json({
            success: false,
            message: "please insert the id or file"
        })
      }

      const deleteFromCloudinary = async (id) => {
        try {
          const result = await cloudinary.uploader.destroy(id);
          return result;
        } catch(error) {
          return res.status(500).json({
          success: false,
          message: "not deleted from cloud"
          })
        }
      }
      await deleteFromCloudinary(id);

      const uploadToCloudinary = (fileBuffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: 'user_uploads',
              resource_type: 'auto'
            },
            (error, result) => {
              if(result){
                resolve(result);
              }else{
                reject(error);
              }
            }
          );
      
          streamifier.createReadStream(fileBuffer).pipe(stream);
        });
      }
      const uploadPromises = file.map(file => uploadToCloudinary(file.buffer));
      const cloudinaryResult = await Promise.all(uploadPromises);
      const uploadURLs = cloudinaryResult.map(result => result.secure_url);
      const uploadIDs = cloudinaryResult.map(result => result.public_id);

      return res.status(200).json({
        success: true,
        message: "file successfully updated",
        data: {
            URL : uploadURLs,
            public_ID: uploadIDs
        }
      })
    } catch( error ) {
      next(error);
    }
}

export default updateUpload;