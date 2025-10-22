import mongoose from "mongoose"


type User = {
    name:string,
    email:string,
    password:string
}

const userSchema = new mongoose.Schema<User>({
    name:{
        type:String,
        minlength: [2, "Name must be at least 2 characters"],
         required: [true, "Name is required"],
        trim: true,
    },
    email:{
        type:String,
        unique: [true, "Librarian already registered"],
        required: [true, "Email is required"],
        trim: true,
        index: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Email must be valid"],
    },
    password:{
        type:String,
         required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
    },
   
}{ timestamps: true })

export const UserModel = mongoose.model("users", userSchema)