const mongoose = require('mongoose')

const TodosScheme = new mongoose.Schema({
    title: {type: String, trim: true},
    complete: {type: Boolean},
    userId: {type: String, required: true}
})

module.exports = mongoose.model("Todo", TodosScheme)