import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getCrisisData,
  updateCrisisData,
  addEmergencyContact,
  addPersonalReminder,
  addCopingStrategy,
  deleteEmergencyContact
} from "../controllers/crisisDataController.js";

const router = express.Router();




// GET crisis data
router.get("/", authMiddleware, getCrisisData);

// PUT update crisis data
router.put("/", authMiddleware, updateCrisisData);

// POST add emergency contact
router.post("/contacts",authMiddleware, addEmergencyContact);

// POST add personal reminder
router.post("/reminders", authMiddleware, addPersonalReminder);

// POST add coping strategy
router.post("/strategies",authMiddleware, addCopingStrategy);

// DELETE emergency contact
router.delete("/contacts/:contactId",authMiddleware, deleteEmergencyContact);

export default router;