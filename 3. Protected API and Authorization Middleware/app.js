import express from "express";
import dotenv from 'dotenv';
import deleteProduct from "./routes/deleteProduct.routes.js";
import updateUser from "./routes/updateUser.routes.js";
dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api/delete', deleteProduct);
app.use('/api/update', updateUser);

app.listen(PORT, () => {
    console.log(`app is running on port: ${PORT}`);
});