const TodoSchema = require('../models/todos-model')

class TodoService {
    async addTodo(todo) {
        const newTodo = await TodoSchema.create({todo});
        return newTodo;
    }

    async editTodo(id, newTodo) {
        console.log(newTodo);
        const editTodo = await TodoSchema.findByIdAndUpdate({_id: id}, {todo: newTodo});
        return editTodo;
    }

    async getTodos() {
        const todos = await TodoSchema.find({}, {todo:2, _id:1, isDone: 3});
        return {todos: todos};
    }

    async deleteTodo(id) {
        const delTodo = await TodoSchema.findByIdAndDelete({_id: id});
        return delTodo;
    }

    async doneTodo(id) {
        const doneTd = await TodoSchema.findByIdAndUpdate({_id: id}, {isDone: true});
        return doneTd;
    }
}

module.exports = new TodoService();