import React from 'react'
import "./CreateTodoButton.css"
import { TodoContext } from '../TodoContext'

function CreateTodoButton() {
  const {
    setOpenModal
} = React.useContext(TodoContext)

  return (
    <div >
      <button 
      className='botonTarea'
        onClick={() => {setOpenModal(state => !state)}} >
        Añadir
        </button>
    </div>
  )
}

export  {CreateTodoButton}