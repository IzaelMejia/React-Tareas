import React from 'react'
import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal,loading}) {

  return (
    <div >
      <button 
        className='botonTarea'
        onClick={() => {setOpenModal(state => !state)}} 
        disabled={loading}
      >
        Añadir
        </button>
    </div>
  )
}

export  {CreateTodoButton}