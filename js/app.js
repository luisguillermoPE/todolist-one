// console.log('bye')


// const inputTodo = document.getElementById("todo");

// const botonAgregar = document.getElementById("agregar");


function agregarTarea() {

    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if (nuevaTareaTexto === "") {
        alert("Ingrese una tarea");
        return;
    }

    // crear elemento en la lista
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = nuevaTareaTexto + " ";


    // crear boton eliminar

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () { nuevaTarea.remove(); }


    // agregar boton eliminar al elemento de la lista

    nuevaTarea.appendChild(botonEliminar);


    // agregar el elemento/tarea a la lista

    document.getElementById("listaTareas").appendChild(nuevaTarea);



    // limpiar cuadro de texto
    document.getElementById("nuevaTarea").value="";


}