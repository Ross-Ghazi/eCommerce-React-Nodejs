import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // For some ver of mongo db we should put some parmeters on {} for now I did not add anything and it is working.
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
