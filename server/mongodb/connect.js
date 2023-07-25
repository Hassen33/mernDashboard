import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set("strictQuery", true);

    mongoose
        .connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log('db connection error wwwwwwwwwwwwwwwwwwwwwwwwwwww'));
};

export default connectDB;
