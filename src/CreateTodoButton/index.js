import React from 'react'
import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal}) {

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