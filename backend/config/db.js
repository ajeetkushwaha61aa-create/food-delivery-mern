import mongoose from "mongoose"

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL ,{family:4,})
        console.log("db connected")
    } catch (error) {
        console.log("db error",error)
    }
}

export default connectDb