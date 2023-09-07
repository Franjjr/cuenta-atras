// 1 importar react y hooks, y  otros componenetes
import React, { useState } from "react";


// 2. Creamos el componente (function) y 5. lo exportamos
export const ExampleForm = () => {
  // 3. Nuestro codigo JS
  // const [variable, fx que cambia el valor de la variale] y el valor incial 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkMe, setCheckMe] = useState(true);
  const [selectMe, setSelectMe] = useState("3");

  function handleEmail(event) {
    console.log(event);
    // console.log(event.target.tagName, event.target.type, event.target.checked)
    setEmail(event.target.value);
  }

  const handlePassword = (e) => {
    // console.log(e.target.value)
    setPassword(e.target.value);
  }

  /* const handleCheckMe = (e) => {
    setCheckMe(e.target.checked)
  } */
  // (e) => {setCheckMe(e.target.checked)}
  // (e) => setCheckMe(e.target.checked)
  // e => setCheckMe(e.target.checked)
  
  const handleSelect = (e) => {
      setSelectMe(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, checkMe, selectMe);
    // logica de lo que deseo hacer .... 
  }



  // 4. ultimo comando JS (return), devolviendo un elemento HTML
  return (
    <div className="container">
      <h1 className="text-primary">Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={handleEmail} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} type="password" className="form-control" id="exampleInputPassword1"
            onChange={handlePassword} />
        </div>
        <div className="mb-3 form-check">
          <input checked={checkMe} type="checkbox" className="form-check-input" id="exampleCheck1"
            onChange={(e) => setCheckMe(e.target.checked)} />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        {/* inicio select */}
        <select value={selectMe} className="form-select" aria-label="Default select example" 
            onChange={handleSelect}>
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {/* fin select */}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}
