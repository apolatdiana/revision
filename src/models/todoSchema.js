const mongoose = require('mongoose')
const schema = mongoose.Schema;

const todoSchema = new schema({
    activity: {
        type: String,
        required:true
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default:false
    }
})
const Todo= mongoose.model("todoSchema", todoSchema)
module.exports= Todo