import React from 'react'
import "./TodoForm.css"
import {TodoContext} from "../../TodoContext"

function TodoForm() {
  //contexto
  const {
    setOpenModal,
    addTarea
  } =  React.useContext(TodoContext)

  //crear estado local 
  const [newTareaValue,setNewTareaValue] = React.useState("")

  const onSubmit = (event)=> {
    event.preventDefault()      //metodo evita que se recargue la pagina
    addTarea(newTareaValue)
    setOpenModal(false)
  }

  const onCancelar =()=> {
    setOpenModal(false)
  }

  const onChange =(event)=> {
    setNewTareaValue(event.target.value)
  }


  return (
    <form onSubmit={onSubmit}> 
        <label>Escribe tu nueva Tarea</label>
        <textarea
            placeholder='picar carne'
            value={newTareaValue}
            onChange={onChange}
        />

      <div className='containerBotones'>
        <button
          type='button' 
          className='Form-Buttons--cancelar'
          onClick={onCancelar}
          
          >Cancelar</button> 

        <button
          type='submit'
          className='Form-Buttons--AgregarTarea'
        >Añadir</button>
      </div>
    </form>
    
  )
}

export  {TodoForm}