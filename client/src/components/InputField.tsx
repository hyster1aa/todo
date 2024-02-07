import React, { FC, useRef } from 'react'
import './styles.css';

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (event: React.FormEvent) => void
}

const InputField: FC<Props> = ( { todo, setTodo, handleAdd } ) => {  
 const inputRef = useRef<HTMLInputElement>(null);

  
  return (
    <form className='input' onSubmit={(e) => { 
      handleAdd(e)
      inputRef.current?.blur();
    }}>
        <input className='input__box' 
          ref = {inputRef}
          type='input'
          value = {todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter a task'
        />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField