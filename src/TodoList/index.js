import React from 'react'
import "./TodoList.css"

function TodoList(props) { //error , loading, searchedTodos  - Esta es forma de llamarlos 
const renderFunc = props.children || props.render; 

  return (
    // children se usa para mostrar contenido html, en este caso ese contiudo viende el TodoCounter
    <div className='TodoListContainer'>

      {/* Renderiza props.onError() si props.error es verdadero. */}
      {props.error && props.onError() }
      {/* Renderiza props.onLoading() si props.loading es verdadero. */}
      {props.loading && props.onLoading() }
      {/* Renderiza props.onEmptyTodos() si props.loading es falso y props.completedTareas es cero. */}
      {(!props.loading && !props.completedTareas ) &&  props.onEmptyTodos()}
      
      {/* Si es VERDAD que tiene datos y no tiene searchTodos, entonces renderiza lo que viene de render prop */}
      {(!!props.completedTareas && !props.searchedTodos.length) &&  props.onEmptySearchResults(props.searchText)}

      {/* Mapea cada elemento en props.searchedTodos utilizando props.render() para
       renderizar cada uno de ellos. Esto es comúnmente utilizado para renderizar una lista de elementos. */}
      {/* {props.searchedTodos.map(props.render)} Enviamos una render prop */}
      {props.searchedTodos.map(renderFunc)} {/* Enviamos una render función */}


      <ul>
          {/* {props.children} */}
      </ul>
    </div>
  )
}

export  {TodoList}