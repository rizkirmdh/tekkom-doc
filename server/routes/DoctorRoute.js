import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { countByGen, deleteDoctor, getAllDoctor, getDoctor, updateDoctor, countBySp, getDoctorSchedule, updatePasswordDoctor } from "../controller/DoctorController.js";

const router = express.Router();

router.put("/:id", updateDoctor)

// DELETE
router.delete("/:id", deleteDoctor)

// GET
router.get("/find/:id", getDoctor)

// GET ALL
router.get("/", getAllDoctor)

router.get("/countBySpecialist", countBySp)

router.get("/countByGender", countByGen)

router.get("/schedule/:id", getDoctorSchedule)

// CHANGE PASSWORD
router.put("/changepass/:id", updatePasswordDoctor)

export default router 