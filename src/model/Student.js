import { defaults } from "pg"
import sequelize from "sequelize"
import {connectiondb} from "../config/connetionDB"

const Student = connectiondb.define('Student',{
    idStudent: {
        type: sequelize.INTEGER,
        primarykey: true
    },
    nameStudent:{
        type: sequelize.TEXT
    },
    ageStudent:{
        type: sequelize.INTEGER
    }
})
  export default Student;


    