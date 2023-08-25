import React from 'react'
import "./TodoList.css"

function TodoList({children}) {
  return (
    // children se usa para mostrar contenido html, en este caso ese contiudo viende el TodoCounter
    <div className='cajaUl'>
      <ul>
          {children}
      </ul>
    </div>
  )
}

export  {TodoList}