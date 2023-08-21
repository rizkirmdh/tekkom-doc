import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createDrug, deleteDrug, getAllDrug, getDrug, updateDrug, getDrugByNameCategory } from "../controller/DrugController.js";

const router = express.Router();


// CREATE
router.post("/", createDrug)

// UPDATE
router.put("/:id", updateDrug)

// DELETE
router.delete("/:id", deleteDrug)

// GET
router.get("/find/:id", getDrug)

// GET BY NAME AND CATEGORY
router.get("/alldrug", getDrugByNameCategory)

//GET ALL
router.get("/", getAllDrug)


export default router 