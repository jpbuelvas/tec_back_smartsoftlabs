import { Router } from "express";
const router = Router();

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.controller";

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
