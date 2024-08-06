import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI: string = process.env.MONGO_URL || '';
const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI, {
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('DB connection error:', error);
    }
}

module.exports = { db };
