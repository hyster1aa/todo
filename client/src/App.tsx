import { FC, useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import TodoService from './services/TodoService';

const App : FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await TodoService.getTodos();
      setTodos(data.data.todos);
    }
    fetchTodos();
  },[])

  const handleAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      const idTodo = await TodoService.addTodo(todo);
      setTodos([...todos, {_id: idTodo.data._id, todo:todo, isDone:false}]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className='App'>
      <span className = "heading">Taskify</span>
      <InputField todo = { todo } setTodo = { setTodo } handleAdd = {handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
