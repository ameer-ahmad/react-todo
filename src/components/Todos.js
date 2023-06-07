import React from 'react'

const Todos = ({ todos }) => {
  return (
    <div className='single-todo'>
        {todos.map((todo) => {
            return (
                <div>{todo}</div>
            )
        })}
    </div>
  )
}

export default Todos