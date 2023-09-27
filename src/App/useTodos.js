import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos(){
    //Actualizar las tareas 
  const {
    item:todos, 
    saveItem:saveTodos,
    sincronizeItem:sincronizeTodos,
    loading,
    error
  
  } = useLocalStorage("TODOS_V1", []) 
  
  //Actualizar input de escritura del usuario
  const [searchValue, setSearchValue] = React.useState("")    //valor inicial  ""

  //Abrir Modal de Formulario
  const [openModal, setOpenModal] = React.useState(false)


  const completedTareas = todos.filter(tareas => !!tareas.completed).length;
  const noCompletedTareas = todos.length; 
  
  // Nuevo array que nos filtra las coincidencias que escriba el usuario 
  const searchedTodos= todos.filter(
    //si el estado de searchValue o sea lo que el usauiro ingreso coincide con algun objeto
    (tareas)=>{
      const todoText = tareas.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )


  const completarTarea = (text) => {
    const newTodos = [...todos] //  " ...  -Crea una copia "
    //identificador para saber cual modificar 
    const todoIndex= newTodos.findIndex(
      (todo) => todo.text === text       //si el texto es igual a la prop "texto" que recibimos en la funcion "completarTarea"
    )
    newTodos[todoIndex].completed = true  // Marca la tarea como completada cambiando el valor de "completed" a true en "newTodos"
  //Es igual a una función (setTodos)
  saveTodos(newTodos)

  }

  const eliminarTarea = (text) => {
    const newTodos = [...todos] 
    const todoIndex= newTodos.findIndex(
      // Encuentra el índice del objeto en "newTodos" cuyo texto coincide con el parámetro "text"
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)  // Elimina la tarea en el índice encontrado del array "newTodos"
    saveTodos(newTodos)
  }

  const addTarea = (text)=>{
    const newTodos = [...todos] 
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

    return{
      loading,
      error,
      completedTareas,
      noCompletedTareas,
      searchValue,
      setSearchValue,
      searchedTodos,
      completarTarea,
      eliminarTarea,
      openModal,
      setOpenModal,
      addTarea,
      sincronizeTodos
    }
}


export { useTodos}