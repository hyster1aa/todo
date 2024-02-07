const { Router } = require("express");
const todoController = require("../controllers/todo-controller");
const {check} = require('express-validator');
const router = new Router();

router.post('/addTodo',[
    check('todo', "Todo must be non-empty").notEmpty()
    ],todoController.addTodo);
router.get('/todos', todoController.gettodo);
router.delete('/deleteTodo/:id', todoController.deleteTodo);
router.put('/editTodo/:id', todoController.editTodo);
router.put('/doneTodo/:id', todoController.doneTodo);

module.exports = router;