import express from 'express'
import Students from '../models/students_model.js'
import {getStudents, createStudents, editStudents, delStudents} from '../controllers/students_controller.js'

// here we create the router
const router = express.Router();

router.get("/", getStudents);

router.post("/students", createStudents);

router.delete('/students/:id', delStudents);

router.put('/students/:id', editStudents);

// here we export the router
export default router;