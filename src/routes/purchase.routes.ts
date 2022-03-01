import { Router } from "express";
const router = Router();

import {
  purchases
} from "../controllers/purchase.controller";

router.get("/purchases", purchases);


export default router;