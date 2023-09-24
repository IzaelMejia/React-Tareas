import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodosError} from "../TodosError"
import {EmptyTodos} from "../EmptyTodos"
import { TodosLoading } from '../TodosLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from './TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodoHeader} from '../TodoHeader';



function AppUI(){
  const{
    loading,
    error,
    searchedTodos,
    completarTarea,
    eliminarTarea,
    openModal,
    completedTareas,
    noCompletedTareas,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)

    return (
        // Esto es React.Fragment  "  <>  "
        <React.Fragment>
          <div className="container">
            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
            </div>
              <div className="containerPedirDatos">

              <TodoHeader>
                <TodoCounter
                  completedTareas={completedTareas}
                  noCompletedTareas={noCompletedTareas}
                />
                <TodoFilter
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </TodoHeader>
                
                  <TodoList>
                  {loading && (
                  <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                  </>
                  )}
                  {error && <TodosError/> }
                  {/* Si loading es "false", o sea que no esta cargando */}
                  {/* Y el array no tiene datos  */}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                  {searchedTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={()=>completarTarea(todo.text)} //(todo.text) -P asa el texto de esta tarea para que se marque como completada en el estado".
                      onDelete={()=>eliminarTarea(todo.text)}
                    />
                  ))}
                </TodoList>
                <CreateTodoButton/>
              </div>
        </React.Fragment>
      );
}

export {AppUI}