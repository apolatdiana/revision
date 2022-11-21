const mongoose = require("mongoose")

schema = mongoose.Schema
// schemas define how the data will look like
const todoSchema = new schema({
   
    name: {
        type: "String",
        required: true,
       
    },
        
    isCompleted: {
        type: Boolean,
        required: true,
        default:false
    }
})

const Todo = mongoose.model("todo", todoSchema)
module.exports = Todo; 