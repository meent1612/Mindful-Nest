import express from "express";
import {
  getTreatments,
  addTreatment,
  deleteTreatment,
} from "../controllers/treatmentController.js";

const router = express.Router();

// GET all treatments
router.get("/", getTreatments);

// POST add treatment
router.post("/", addTreatment);

// DELETE a treatment by id
router.delete("/:id", deleteTreatment);

export default router;
