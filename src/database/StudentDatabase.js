import { Router } from "express"
import { where } from "sequelize/types"
import { Where } from "sequelize/types/lib/utils"
import {connectiondb} from "../config/connetionDB"

export const getAllStudents = async() =>{

    try{
        const[results, metadata] = await connectiondb.query("SELECT * From Student")
        console.log("results")
        return results     
}catch(error){
    console.log(error)
}
}

   export const saveStudent = async(nameVariable, ageVariable) => {
       
    try{
        const[results, metadata] = await connectiondb.query("INSERT INTO Student(nameStudent, ageStudent) values(:nameStudent, :ageStudent)",
        {
            replacements:{
                nameStudent: nameVariable,
                ageStudent: ageVariable

            }  
        })
        return "The Student was created"
    }catch(error){
        console.log(error)
    }
    
    }

    export const DeleteStudentbyid = async (idStudent) =>{

        try{
            const[results, metadata] = await connectiondb.query("Delete from Student where idStudent = :idVariable",
            
          {  replacements:{
                idVariable: idStudent
                
            }}) 
            return "Student eliminated"
        }catch(error){

   
    }
       
}
    
