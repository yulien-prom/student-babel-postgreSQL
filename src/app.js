import express, {json} from "express"
import morgan from "morgan"
import StudentRoutes from "./Routes/StudentRoutes"


//initilization
const app = express()

//middleware
app.use(morgan("dev"))
app.use(json())

//routes
app.use("/Student", StudentRoutes)

//Settings
app.set ("port", 4000)
app.listen(app.get("port"))
console.log(`server on port ${app.get("port")}`)
