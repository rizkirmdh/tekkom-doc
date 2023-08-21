import express from "express";
import { registerPatient, loginPatient, registerDoctor, loginDoctor } from "../controller/AuthController.js";

const router = express.Router();

router.post("/registerPatient", registerPatient)
router.post("/loginPatient", loginPatient)
router.post("/registerDoctor", registerDoctor)
router.post("/loginDoctor", loginDoctor)

export default router 