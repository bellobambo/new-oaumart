import mongoose from 'mongoose';

export const connectMongodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL , {
            dbName : 'oaumart',
            serverSelectionTimeoutMS: 50000,
        });
        // console.log('Connected to mongodb')
    } catch (error) {
        console.log('Error connecting' , error);
    }
}