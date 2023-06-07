import React from 'react'

const Todos = ({ todos, removeTodo }) => {
  return (
    <div className='todos-container'>
        {todos.map((todo, pos) => {
            return (
                <div className='single-todo' key={pos}>
                    {todo}
                    <button className='delete' onClick={() => {removeTodo(pos)}}>X</button>
                </div>
            )
        })}
    </div>
  )
}

export default Todos