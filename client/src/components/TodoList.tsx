import React, {FC} from 'react'
import './styles.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList: FC<Props> = ( {todos, setTodos}) => {
  return (
    <div className="container">
      <div className = 'todos'>
        <span className="todos__heading">Active Tasks</span>
          {todos?.filter(todo => !todo.isDone).map((todo, index) => (
            <SingleTodo todos={todos} todo={todo} key={todo._id} setTodos={setTodos}/>
          ))}
      </div>

      <div className = 'todos__remove'>
        <span className='todos__heading'>Completed Tasks</span>
          {todos?.filter(todo => todo.isDone).map((todo, index) => (
            <SingleTodo todos={todos} todo={todo} key={todo._id} setTodos={setTodos}/>
          ))}
      </div>
    </div>
  );
}

export default TodoList