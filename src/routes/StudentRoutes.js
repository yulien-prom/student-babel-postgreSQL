import {Router} from "express"

import {getAllStudentsController, saveStudentController,DeleteStudentbyid} from "../controller/StudentController"


const router = Router();

//Localhost:4000/Student/getall
router.route("/getall")
.get(getAllStudentsController) 


//Localhost:4000/Student/save
router.route("/save")
.post(saveStudentController)


//localhost:4000/Student/Delete
router.route("/Delete")
.delete(DeleteStudentbyid)

export default router;