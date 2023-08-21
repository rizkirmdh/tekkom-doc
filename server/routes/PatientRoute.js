import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { deletePatient, getAllPatient, getPatient, updatePasswordPatient, updatePatient } from "../controller/PatientController.js";

const router = express.Router();

// UPDATE
router.put("/:id", updatePatient)

// DELETE
router.delete("/:id", deletePatient)

// GET
router.get("/:id", getPatient)

// GET ALL
router.get("/", getAllPatient)

router.put("/changepass/:id", updatePasswordPatient)

export default router 