import express from "express";
import { getCourse } from "../Controller/course.controller.js";


const router=express.Router();
router.get('/',getCourse);
export default router;