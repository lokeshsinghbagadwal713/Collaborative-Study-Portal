import mongoose from "mongoose";
import {DB_Name} from '../constant.js';


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose
        .connect(`${process.env.DB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connection successfully || DB Host :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection failed!..", error);
        process.exit(1);
    }
}

export default connectDB;