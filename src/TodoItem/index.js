import "./TodoItem.css"
import { AiOutlineCheckCircle as CheckIcon} from "react-icons/ai";
import { BsFillTrash3Fill as DeleteIcon}  from "react-icons/bs";


function TodoItem(props){
    return(
        <li>
        <CheckIcon 
          className={`iconoNormal ${props.completed && "iconoListo"}`} 
          //Actualizar la Tarea 
          onClick={props.onComplete}
        />
           {/* Usamos ternario para mostrar el css diferente cuando la tarea es true, esto se ve en app.js */}
          <p className={`textoTarea ${props.completed && "textoTareaHecha"}`}>{props.text}</p>
          <DeleteIcon  className="tareaBorrar"
                onClick={props.onDelete}
          />
        </li>
  
    );
  }
  export  {TodoItem};