import express from "express"
import UserRoutes from "./Users.js"
import PropertyRoutes from "./Properties.js"

const router = express.Router();

router.use("/users",UserRoutes)
router.use("/property",PropertyRoutes)

export default router