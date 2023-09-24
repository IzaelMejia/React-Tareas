import React from 'react'
import "./TodoFilter.css"
import { AiOutlineSearch } from "react-icons/ai";

function TodoFilter({searchValue,setSearchValue}) {
  
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Buscar..."
        className="inputFilter"
        value={searchValue}
        onChange={(event) =>{
          //"event" es una propiedad que tiene el componente .
          //con "target" seleccionamos el objetivo "input".
          //value es la propiedad de ver los valores  que pasamos .
          // console.log(event.target.value);
          setSearchValue(event.target.value) // actualizar y guardar nuevo valor en el estado
        }}
      />
      <AiOutlineSearch className="iconoBuscar" />
    </div>
  )
}

export  {TodoFilter}


