import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =  async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected: ${conn.connection.host}`)
        
    }catch(err){
        console.error("Mongo Connect Error: ",err);
        process.exit();
    }
};

export default connectDB;