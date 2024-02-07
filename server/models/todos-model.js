const {Schema, model} = require('mongoose');

const TodoSchema = new Schema({
    todo: {type: String, unique: false, required: true},
    isDone: {type: Boolean, default: false}
})

module.exports = model('Todo', TodoSchema);