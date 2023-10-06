const express = require('express')
const mongoose = require('mongoose')
const cohortRoutes = require('./routes/routes')
const cors = require('cors')

const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/cohorts", { useNewUrlParser: true, useUnifiedTopology: true }) 

app.use('/', cohortRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port "+ PORT)
})