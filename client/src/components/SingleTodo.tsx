import React, { FC, useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'
import TodoService from '../services/TodoService'


interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo: FC<Props> = ( {todo, todos, setTodos } ) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = async (id: string) => {
    const response = await TodoService.doneTodo(id);
    console.log(response.data);
    setTodos( todos.map(( todo ) => 
      todo._id === id ? {...todo, isDone: true} : todo
    ))
  };

  const handleDelete = async (id: string) => {
    const response = await TodoService.deleteTodo(id);
    console.log(response.data);
    setTodos(todos.filter( ( todo ) => 
      todo._id !== id)
    );
  };

  const handleEdit = async (e:React.FormEvent, id: string ) => {
    e.preventDefault();
    const response = await TodoService.editTodo(editTodo,id);
    console.log(response.data);
    setTodos(todos.map((todo)=> (
      todo._id===id?{...todo, todo:editTodo}:todo))
    );
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  },[edit]);
  
  return (
    <form className = 'todos__single' onSubmit = { (e) => handleEdit(e, todo._id) } >
      {
        edit ? (
          <input ref = {inputRef} value={editTodo} onChange = { (e) => setEditTodo(e.target.value)}/>
        ) : todo.isDone ? (
          <s className = 'todos__single--text'>{todo.todo}</s>
        ) : (
          <span className = 'todos__single--text'>{todo.todo}</span>
        )
      }
      <div>
      
        <span className = 'icon' onClick = { () => {
          if(!edit && !todo.isDone) {
            setEdit(!edit)
          }
        }}>
          <AiFillEdit/>
        </span>
        <span className = 'icon'  onClick = {() => handleDelete(todo._id)}>
          <AiFillDelete/>
        </span>
        <span className = 'icon' onClick = {() => handleDone(todo._id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo