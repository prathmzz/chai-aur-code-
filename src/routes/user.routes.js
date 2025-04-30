import { Router } from "express";   
import { registerUser } from "../controllers/user.controller.js"; 

const userRoute = Router();

userRoute.post("/register", registerUser);

export default userRoute;