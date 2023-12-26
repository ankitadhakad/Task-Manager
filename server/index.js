const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const ToDoModel = require('./models/Todo')
const path = require('path')

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO).then (() => {
    console.log('Connected to MONGODB!');
})//to check wether we are connected to database//
.catch((err) => {
    console.log(err);
})


app.get('/get', (req,res) => {
    ToDoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res) => {
    const {id} = req.params;
    console.log(id);
    ToDoModel.findByIdAndUpdate({_id : id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.delete('/delete/:id', (req,res) =>{
    const {id} = req.params;
    ToDoModel.findByIdAndDelete({_id : id})
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.post('/add',(req,res) => {
    const task = req.body.task;
    ToDoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001, () =>{
    console.log("Server has started!!")
})