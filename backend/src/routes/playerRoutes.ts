import { Router } from "express";
import { createPlayer, getPlayer } from "../controller/playerController";


const router = Router()
router.post("/addPlayer", createPlayer)
router.get("/getPlayers", getPlayer)

export default router
    
