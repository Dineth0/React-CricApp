import { Request, Response } from "express"
import { Player } from "../modals/playerModel"

export const addPlayer = async (req:Request, res:Response) =>{

    try{
        const {name, age, country, main_role, batting, balling} = req.body

        if(!name || !age || !country || !main_role || !balling || !batting ){
            return res.status(400).json({
                message:""
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
        const savedPlayer = await newPlayer.save()
        res.status(201).json({
            message: "Player Added",
            data: savedPlayer
        })
    }catch(err){
        console.error(err)
        res.status(500).json({
            message:""
        })
    }
}