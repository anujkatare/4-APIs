import multer from "multer";

const storage = multer.memoryStorage(); //By this line , storage use RAM;

const fileFilter = (req, file, cb) => {
    const allowedMimetype = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];

    if(allowedMimetype.includes(file.mimetype)){
        cb(null, true); // accept file : order
    }else{
        cb(new Error('invalid type of file , try jpg, jpeg, png, pdf'), false);
    }
}
  
const upload = multer(
    {
        storage: storage,
        fileFilter: fileFilter,
        limits: {
            fileSize: 5 * 1024 * 1024, //5MB only files 
        }
    }
)


export default upload;