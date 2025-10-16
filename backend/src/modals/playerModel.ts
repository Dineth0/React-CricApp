import mongoose, { Schema, Document } from "mongoose"


interface IPlayer extends Document{
    name : string
    age : number
    country : string
    main_role : string
    batting : string
    balling : string
}

const playerSchema = new Schema<IPlayer>({
    name : { type: String, required: true},
    age : { type: Number, required: true},
    country : { type: String, required: true},
    main_role : { type: String, required: true},
    batting : { type: String, required: true},
    balling : { type: String, required: true},
},{timestamps: true})

export const Player = mongoose.model<IPlayer>("Player", playerSchema)