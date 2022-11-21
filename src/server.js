const mongoose = require('mongoose')
const express = require('express')
const router = require('./router/routes')
const cors= require('cors')
const app = express()

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

const url = "mongodb+srv://apoldi:<password>@cluster0.0qog5vs.mongodb.net/todo"

 const port = 8080;
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname +"/todo.html" )
})
app.use(express.json())
app.use('/', router)

app.use(express.static('src'))

mongoose.connect(url, () => {
    app.listen(port, () => {
        console.log(`server is running at port ${port} `)
    })
}).catch(error=>console.log(error))

