import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
);

const deleteUpload = async (req, res) => {
    try {
        const {id} = req.body;
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
    const cloudResponse = await deleteFromCloudinary(id);

    return res.status(200).json({
        success: true,
        message: "file deleted from cloud successfully",
        data: cloudResponse
    })
    } catch(error){
        return res.status(500).json({
            success: false,
            message: "not deleted from cloud"
        })
    }
}

export default deleteUpload;