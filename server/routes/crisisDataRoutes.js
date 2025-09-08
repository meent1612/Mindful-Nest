import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
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
router.get("/", authenticateToken, getCrisisData);

// PUT update crisis data
router.put("/", authenticateToken, updateCrisisData);

// POST add emergency contact
router.post("/contacts",authenticateToken, addEmergencyContact);

// POST add personal reminder
router.post("/reminders", authenticateToken, addPersonalReminder);

// POST add coping strategy
router.post("/strategies",authenticateToken, addCopingStrategy);

// DELETE emergency contact
router.delete("/contacts/:contactId",authenticateToken, deleteEmergencyContact);

export default router;