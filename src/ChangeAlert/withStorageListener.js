import React from "react";

// Esta función será un HOC que envuelve el componente que queremos mejorar con la 
                    // funcionalidad de escuchar cambios en el almacenamiento local.
function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        // Estado para  notificarle si hubo cambiois en otra pestaña del navegador
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener("storage", (change) => {
            if (change.key === "TODOS_V1") {
                console.log("hubo cambios en TODOS_V1");
                setStorageChange(true);
            }
        })
        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }
        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}
export { withStorageListener };