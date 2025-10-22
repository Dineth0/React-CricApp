import { Router } from "express";
import { getProfile, login, signup } from "../controller/AuthController";
import athenticateToken from "../middleware/authenticateToken"


const authRouter = Router()

authRouter.post('/signup', signup)
authRouter.post('/login', login)
authRouter.get('/profile', athenticateToken, getProfile)