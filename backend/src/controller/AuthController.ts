import jwt from 'jsonwebtoken';
import Response, { NextFunction } from 'express';
import { UserModel } from '../modals/User';
import bcrypt from 'bcrypt'

//Token eka generate karanaw

const generateAuthToken = (userId: string)=>{
    const token = jwt.sign(
        {userId},
        process.env.JWT_SECRET || 'supersecretjwtkey',
        {
            expiresIn: '3h'
        }
    )
    return token
}

// User Resgistration

const signup = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            const error = new Error('USer with this email already exists');
            (error as any).statusCode = 409;
            throw error;
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new UserModel({
            name,
            email,
            password
        })
        await newUser.save()

        const token = generateAuthToken(newUser.id.toString())

        res.status(201).json({
            success: true,
            message: 'Librarian registered successfully',
            token,
            librarian: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });
    }catch(error){
        next(error)
    }
}

