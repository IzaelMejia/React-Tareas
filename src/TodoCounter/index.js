import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"

//las props por dentro son un objeto ({}), que pueden recibir varias props. Se llama destructuring
function TodoCounter(){  
  const {
    completedTareas,
    noCompletedTareas
  }=React.useContext(TodoContext)

    return(
      <h1>HAZ COMPETADO {completedTareas} DE {noCompletedTareas} TAREAS</h1>
    );
  }


export {TodoCounter}