import { NextFunction, Request, Response } from "express"
import { Player } from "../modals/playerModel"
import { error } from "console"

export const createPlayer = async (req:Request, res:Response, next:NextFunction) =>{
    try{
        const {name, age, country, main_role, batting, balling} = req.body

        const existing = await Player.findOne({name, country})
        if(existing){
            return res.status(400).json({
                success: false,
                data:null,
                  message:"P layer All Ready Existing"
            })
        }
        const newPlayer = new Player({
            name,
            age,
            country,
            main_role,
            batting,
            balling
        })
        await newPlayer.save();
        res.status(201).json({
            success:true,
            data: {player: newPlayer},
            message: "Player Added Successfully"
        })
    }catch(error){
        next(error)
    }
    
}

