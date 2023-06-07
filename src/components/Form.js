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

    const removeTodo = (id) => {
        if (todos.length === 1) {
            setTodos([])
        } else {
            setTodos(prevState => {
                let temp = prevState.filter((todo, index) => {
                    return index !== id
                })
                return temp
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
                setTask("")
                }}>ADD</button>
        </form>

        <Todos todos={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default Form