import React, { useState, useEffect } from "react";


export const TodoListRestAPI = () => {
  const [ list, setList ] = useState([]);
  // 1. Crear un todolist con el nombre de usuario
  // 2. Agregar un boton para borrar todas las tareas
  // 3. Al inicio leer las tareas que ya estan cargadas - done
  // 4. Agregar tareas en el servidor (input, utilizar el metod PUT) ->
        // Controlar el input stado para el value del input
        // Controlar con el evento onChange
        // Evento del Forulario: onSubmit 
            // 1ra linea - event.preventDefault
            // - agregarla al array para q se vea en el front
            // - agregarla en el back -.-.--- para que la vea Luis - POST
            // state del input, igual a "";
  // 5. Eliminar una tarea de la lista
  //    Nuestra API borra siempre toda la lista.

  
  // 1. Declaro una función "asincrona" para realizar el request a una API
  const getTodos = async () => {
    // 2. Genero un string con la uri del endpoint
    const url = `${base_url}/todos/user/${user_name}`;
    // 3. Genero un objeto con las request options
    const options = {
      methods: "GET",
      headers: {"Content-Type": "application/json"}
    }
    // 4. Realizao la petición al request con el comando fetch en modo await (espera) y 
    //    asigno su resultado a la variable response
    const response = await fetch(url, options)
    // 5. Determino el resquest fue exitoso mediante la propiedad ok del objeto response
    if (response.ok) {
      // 5.1 Si la respuesta es "OK" ejecuto el método json() en modo await y 
      //     su resultado lo guardo en la variable data
      const data = await response.json();
      // 5.1.1 Realizo todo lo que necesario según la lógica de mi aplicación
      setList(data);
    } else {
      // 5.2 Si obtengo error, realizo todo lo necesario según la lógica de mi aplicación.
      console.log('error:', response.status, response.statusText)
    }
  };


  useEffect(() => {
    getTodos();
  }, [])

  let base_url = "https://playground.4geeks.com/apis/fake";
  let user_name = "lgmm";

  
  return (
    <div className="container col-xs-10 col-md-8 col-lg-6 my-3">
      {/* <h1 className="text-center text-primary">Todos, async await</h1> */}
      {/* <button type="button" className="btn btn-outline-primary btn-lg mb-3 me-3" 
          onClick={isActive ? deleteUser : createUser}>
        {isActive ? "Delete Todo List" : "Create Todo List"}
      </button> */}
      <div className="mb-3">
        <form > {/* onSubmit={addTask} */}
          <input className="form-control" placeholder="Write a new task" type="text" />
        </form>
      </div>
      <h2 className="text-primary">Todos List</h2>
      <div className="list">
        <ul className="list-group">
          {list.map((item, index) => {
            return (
              <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
                {item.label} - {item.done ? 'Completado' : 'Pendiente'}
              </li>
            )})
          }
          <span className="list-group-item bg-light text-end fw-lighter">
            {list.length === 0 ? 'No hay tareas' : 'Tienes un total de tareas: ' + list.length}
          </span>
          <span className="list-group-item bg-light text-end fw-lighter">
              Conexión: {!user_name ? "No hay usuario conectado" : user_name}
          </span>
        </ul>
      </div>
    </div>
  )
}