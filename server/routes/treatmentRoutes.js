import express from "express";
import { addTreatment, getTreatments, deleteTreatment } from "../controllers/treatmentController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, addTreatment);
router.get("/", authenticateToken, getTreatments);
router.delete("/:id", authenticateToken, deleteTreatment); 

export default router;