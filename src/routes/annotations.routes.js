import express from "express";

import {
  createAnnotationController,
  updateAnnotationController,
  deleteAnnotationController,
} from "../controllers/annotations/index.js";
import { authenticateToken } from "../middlewares/index.js";

const router = express.Router();

// annotations

router.post("/", authenticateToken, createAnnotationController)
router.patch("/:idAnnotation", updateAnnotationController)
router.delete("/:idAnnotation", deleteAnnotationController);

export default router;
