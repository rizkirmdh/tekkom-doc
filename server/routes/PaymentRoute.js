import express from "express";
import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";
import { createPayment, deletePayment, getAllPayment, getAllPaymentPatientID, getPayment, updatePayment } from "../controller/PaymentController.js";

const router = express.Router();

// CREATE
router.post("/", createPayment)

// UPDATE
router.put("/:id", updatePayment)

// DELETE
router.delete("/:id", deletePayment)

// GET
router.get("/find/:id", getPayment)

// GET ALL
router.get("/", verifyAdmin, getAllPayment)

// GET ALL BY PATIENT ID
router.get("/get/:id", getAllPaymentPatientID)

export default router