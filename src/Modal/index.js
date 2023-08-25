import React from "react";
import ReactDom from  "react-dom"
import "./Modal.css"

function Modal ({children}){
    return ReactDom.createPortal(
        <div className='ModalPort'>
             {children}         {/* Indicar contenido a teletransportar */}
        </div>,
        document.getElementById("modal")        //Indicar donde se va a mostrar
    )
}

export {Modal}