import express from 'express'
import PropertyController from '../Controllers/Properties.js';
import parser from "../Config/multerConfig.js"

const router = express.Router();

router.post("/create",parser.array("images"), PropertyController.CreateProperty);
router.get("/search", PropertyController.SearchProperty);
router.get("/:id", PropertyController.GetProperty);
router.get("/all", PropertyController.GetAllProperties);
router.put("/:id",parser.array("images"), PropertyController.EditProperty);
router.delete("/:id", PropertyController.DeleteProperty);
router.patch("/status/:id", PropertyController.UpdatePropertyStatus);


export default router