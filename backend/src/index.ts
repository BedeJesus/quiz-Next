import express from 'express'
const cors = require('cors')
const app = express()
import QuestionRoutes from "./routes/QuestionRoutes";

//config JSON response
app.use(express.json())

//Solving the cors problem
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }))

//Routes

app.use('/questions', QuestionRoutes)

app.listen(5000)

