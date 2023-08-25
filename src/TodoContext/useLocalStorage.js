import React from "react";

function useLocalStorage(itemName, initialValue) {
  //Estados de agregar item al localStorage , de cargar los datos y de error 
  const [item, setItem] = React.useState(initialValue); //estado de array vacio 
  const [loading, setLoading] = React.useState(true); // true para que sepa que esta cargando 
  const [error, setError] = React.useState(false);  

  
    //Estado de carga 
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        // Intenta recuperar el valor asociado a la clave 'itemName' desde el almacenamiento local
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
        // Si no hay un valor en el almacenamiento local para la clave 'itemName'
        if (!localStorageItem) {
            // Establece un nuevo valor en el almacenamiento local y asigna 'initialValue' a 'parseItem'
            localStorage.setItem(itemName, JSON.stringify(initialValue)); //guarda todo en TODOS_V1
            parseItem = initialValue;
        } else {
            // Si hay un valor en el almacenamiento local, analiza la cadena JSON y asigna el resultado a 'parseItem'
            parseItem = JSON.parse(localStorageItem); // Si hay algo en el localStorage, lo parcea y lo convierte en string
            setItem(parseItem)
          }
          //Si el efecto corre corectamente . Llamas el actuzaliazador 
        setLoading(false)  //le damos false , significa que ya no carga 
      } catch(error){
        setLoading(false)
        setError(true)
      }
      }, 2000) 
    }, [itemName, initialValue])
    

    // Define una función 'saveItem' para actualizar el valor en el almacenamiento local y el estado
  const saveItem = (newItem) => {
    // Actualiza el valor en el almacenamiento local utilizando la clave 'itemName' y el nuevo valor en formato JSON
    localStorage.setItem(itemName, JSON.stringify(newItem)); // en TODOS_V1 vamos a guardar newTodos
    // Actualiza el estado 'item' con el nuevo valor
    setItem(newItem);
  }
    // Devuelve un arreglo con el estado 'item' actual y la función 'saveItem'
    return {
      item,
      saveItem,
      loading , 
      error}
  }

  export {useLocalStorage} 


  // localStorage.removeItem("TODOS_V1")

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Llorar con la asd', completed: false },
//   { text: 'dsadsa', completed: true }
// ];

// localStorage.setItem("TODOS_V1" , JSON.stringify(defaultTodos))
//Borarrar la informacion 

//custom hooks      
 //Parametro 1-itemName sustituir por TODOS_V1 , es el item a guardar para actualizar el local storage
// Parametro 2- initialValue - estado inicial 