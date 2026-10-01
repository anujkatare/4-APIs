import express from "express";
import dotenv from "dotenv";
import Upload from "./routes/upload.routes.js";
import UploadCloud from "./routes/uploadCloud.routes.js";
import Delete from "./routes/deleteCloud.routes.js";
import Update from "./routes/updateCloud.routes.js"

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/upload', Upload);
app.use('/upload/cloud', UploadCloud);
app.use('/delete',Delete);
app.use('/update', Update);

app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`);
} );