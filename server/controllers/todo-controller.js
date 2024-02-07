const todoService = require("../service/todo-service");

class TodoController {
    async addTodo(req, res, next) {
        try {
            const {todo} = req.body;
            const newTodo = await todoService.addTodo(todo);
            return res.json(newTodo);
        } catch (e) {
            console.log(e);
        }
    }

    async editTodo(req, res, next) {
        try{
            const {id} = req.params;
            const {todo} = req.body;
            console.log(todo);
            const edittodo = await todoService.editTodo(id, todo);
            return res.json(edittodo);
        } catch (e) {
            console.log(e);
        }
    }

    async doneTodo(req, res, next) {
        try {
            const {id} = req.params;
            const doneTd = await todoService.doneTodo(id);
            return res.json(doneTd);
        } catch (e) {

        }
    }

    async gettodo(req, res, next) {
        try {
            const todos = await todoService.getTodos();
            return res.json(todos);
        } catch (e) {
            console.log(e);
        }

    }

    async deleteTodo(req, res, next) {
        try {
            const {id} = req.params;
            const dt = await todoService.deleteTodo(id);
            return res.json(dt)
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new TodoController();