import express from "express";
import { createSchoolController, getAllSchoolsController, updateSchoolController, deleteSchoolController } from "../controllers/schools/schools.controller.js";
const router = express.Router();


router.post("/", createSchoolController);

router.get("/", getAllSchoolsController);


router.put("/:id", updateSchoolController);

router.delete("/:id", deleteSchoolController);
// router.get("/", validator.body(LoginValidator), userLoginController);

export default router;

