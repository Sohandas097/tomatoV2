import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sohandas097:1234567890@cluster0.yrzqmzs.mongodb.net/food-del')
    .then(() => console.log("DB Connected"))
    .catch(error =>console.log(error) )
}