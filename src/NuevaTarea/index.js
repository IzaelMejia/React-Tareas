import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import "./NuevaTarea.css"

function NuevaTarea() {
  return (
    <div className='contenedorTarea'>

        <h2>Crear nueva tarea</h2>
        <div className='contenedorTarea2'>
        <label>Nombre de la tarea</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingrese la tarea"/>
        <CreateTodoButton/>
        <img className='image'src='https://www.wimi-teamwork.com/static/medias/logiciels-gestion-des-taches-1280x640-1.png' alt='decoracion'></img>
        </div>
    </div>
  )
}

export  {NuevaTarea}