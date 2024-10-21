import express from "express";
import { createproduct, deleteproduct, getproducts, updateproduct } from "../controllers/product.controllers";
const router = express.Router();

router.get("/",getproducts)
router.post("/",createproduct);
router.put("/:id",updateproduct );

router.delete("/:id", deleteproduct );

export default router;