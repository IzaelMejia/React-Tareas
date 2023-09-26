import React from "react";
import "./TodoCounter.css"

//las props por dentro son un objeto ({}), que pueden recibir varias props. Se llama destructuring
function TodoCounter({completedTareas,noCompletedTareas,loading}){  

    return(
      <h1 className={` TodoCounter ${!!loading && "TodoCounter--loading"}`} >
        HAZ COMPETADO {completedTareas} DE {noCompletedTareas} TAREAS
      </h1>
    );
  }


export {TodoCounter}