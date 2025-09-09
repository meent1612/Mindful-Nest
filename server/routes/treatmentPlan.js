import express from "express";
import { 
  createTreatmentPlan, 
  getTreatmentPlans, 
  updateMilestone, 
  deleteTreatmentPlan 
} from "../controllers/treatmentPlanController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/plan", authenticateToken, createTreatmentPlan);
router.get("/plans", authenticateToken, getTreatmentPlans);
router.put("/plan/:planId/milestone/:milestoneIndex", authenticateToken, updateMilestone);
router.delete("/plan/:id", authenticateToken, deleteTreatmentPlan);

export default router;