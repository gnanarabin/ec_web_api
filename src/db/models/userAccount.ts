import mongoose from "mongoose";


const userAccount = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }

})

export const user = mongoose.model("User", userAccount)