import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database is connected');
    } catch(error) {
        console.log(`database is not connected , error: ${error}`);
        process.exit(1);
    }
}

export default DBconnect;