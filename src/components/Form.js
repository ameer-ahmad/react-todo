import React, { useState } from 'react'
import Todos from './Todos'

const Form = () => {

    const [task, setTask] = useState("")

    const [todos, setTodos] = useState([])

    const addTodo = (task) => {
        if (task) {
            setTodos(prevState => {
                return [...prevState, task]
              })
        }
    }

  return (
    <div className='container'>
        <form className='form-container'>
            <input className='todo-input' type='text' required placeholder='Add a todo...' value={task} onChange={e => {setTask(e.target.value)}} />
            <button className='add-todo' onClick={(e) => {
                e.preventDefault()
                addTodo(task)
                }}>ADD</button>
        </form>

        <Todos todos={todos} />
    </div>
  )
}

export default Form