import express from "express";
import { checkTextForProblems } from "../controllers/problemController.js";

const router = express.Router();

router.post("/check", checkTextForProblems);

export default router;
