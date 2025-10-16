import { Router } from "express";
import { addPlayer } from "../controller/playerController";


const router = Router()
router.post("/add", addPlayer)

export default router
    
