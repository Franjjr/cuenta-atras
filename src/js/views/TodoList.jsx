import React, {useState} from "react";


export const TodoList = () => {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState(['Tarea uno', 'otra tarea', 'otras mas']);

  
  // Agregar tarea a un array en el handleSubmit
  const addTask = (event) => {
    // 1. preventDefault
    event.preventDefault();
    // agregar la tarea a listTask
    // task = '';
    setListTask([...listTask, task])
    setTask('');
    console.log(listTask);
  };


  return (
    <div className="container">
      <h1 className="text-danger">Todo List</h1>
      <ul>
        <li>
          <form onSubmit={addTask}>
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" />
          </form>
        </li>
        {/* recorrer listTask (utlizando el metodo .map) 
               -  en cada iteración genrerar el li con el valor de adentro */}
        <li>uno</li>
        <li>dos</li>
        <li>otra tarea</li>
        {/* footer queda fijo */}
        <li>footer. largo </li>
      </ul>
    </div>
  )

}
