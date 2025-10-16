import { error } from "console"
import express, { Application, Request, Response } from "express"
import mongoose from "mongoose"
import playerRoutes from "./routes/playerRoutes"


const app: Application = express()
app.use(express.json())
app.get("/",(req: Request, res: Response) =>{
    res.send("Hello TS Express")
})

app.use("/api/v1/player", playerRoutes)

const mongo = mongoose.connect("mongodb://localhost:27017/cric")
mongo.then(() =>{
    console.log("MongoDb Connected")
}).catch((error) =>{
    console.error(error)
})

app.listen(5000, () => {
    console.log("Server running")
})