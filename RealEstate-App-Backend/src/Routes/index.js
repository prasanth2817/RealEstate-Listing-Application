import express from "express"
import UserRoutes from "./Users.js"

const router = express.Router();

router.use("/users",UserRoutes)

export default router