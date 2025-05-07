import express from 'express'
const cors = require('cors')
const app = express()
import QuestionRoutes from "./routes/QuestionRoutes";

app.use(express.json())

app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }))

//Routes
app.use('/questions', QuestionRoutes)

app.listen(5000)