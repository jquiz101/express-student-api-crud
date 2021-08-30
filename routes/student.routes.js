//require express and use it to create our router from express.Router()
const express = require("express");
const router = express.Router();
  
const studentController = require("../controllers/student.controller")

//get all the students
router.get("/students", studentController.findAll)

//get a student by id 
router.get("/students/:id", studentController.findById)

//add a student
router.post("/students", studentController.add)


//updatge a student by id 
router.put("/students/:id", studentController.update)

//updatge a student by id 
router.delete("/students/:id", studentController.delete)

module.exports = router;