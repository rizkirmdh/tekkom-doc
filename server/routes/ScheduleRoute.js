import express from "express";
import { createSchedule, deleteSchedule, getAllSchedule, getSchedule, updateSchedule, updateScheduleBooked } from "../controller/ScheduleController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:doctorId", createSchedule)

// UPDATE
router.put("/:id", updateSchedule)

// DELETE
router.delete("/:id/:doctorId", deleteSchedule)

// GET
router.get("/:id", getSchedule)

// GET ALL
router.get("/", getAllSchedule)

router.put("/book/:id", updateScheduleBooked)

export default router
