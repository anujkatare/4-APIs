import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const userConnection = mongoose.createConnection(process.env.MONGO_URI_USER);
const productConnection = mongoose.createConnection(process.env.MONGO_URI_PRODUCT);

userConnection.on('connected', () => {
    console.log("user database is connected");
})

productConnection.on('connected', () => {
    console.log("product database is connected");
})

userConnection.on('error', (error) => {
    console.log(`user database is not connected : ${error}`);
})
productConnection.on('error', (error) => {
    console.log(`product database is not connected: ${error}`);
})

export {userConnection, productConnection};