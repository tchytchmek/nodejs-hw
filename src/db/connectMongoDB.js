import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('You successfully connected to MongoDB!');
    return mongoose;
  } catch (err) {
    console.dir(err);
    return;
  }
}
