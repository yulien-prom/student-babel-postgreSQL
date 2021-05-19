import {getAllStudents, saveStudent, DeleteStudentbyid} from "../database/StudentDatabase"

export const getAllStudentsController = async (req, res) =>{
    
    const AllStudent = await getAllStudents();

    try{
        if(AllStudent != ""){
            return res.json({
                status: 200,
                message:`The Student was found`,
                data: AllStudent
            })
        }
    }catch(error){
        return res.json({
            status: 500,
            message: error
        })
    }
}
export const saveStudentController = async(req, res) =>{
  const {nameStudent, ageStudent} = req.body;

  try{
      const newStudent = await saveStudent(nameStudent, ageStudent)
      console.log(newStudent)
      if(newStudent == "The Student was created"){
          return res.json({
              status: 201,
            message: newStudent
          })
      }
    }catch(error){
        return res.json({
            status: 500,
            message: error
        })
    }
}
 
export const deleteStudentbyid = async(req, res) =>{

    const {idStudent} = req.body;

    try{
         const DeleteStudent = await DeleteStudentbyid (idStudent)
         console.log(DeleteStudent)
         if(DeleteStudent == "Student eliminated"){
             return res.json({
                 status: 200,
                message: DeleteStudent
             })
         }

    } catch(error){
        return res.json({
            status: 500,
            message: error
        })
    }
}



