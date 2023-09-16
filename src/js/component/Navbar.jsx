// 1. importar react
import React from "react";
import { Link } from "react-router-dom";


// 2. creo el Componente
function Navbar() {
  // 3. codigo JS
  let brand = "Spain 46";

  // 4. Retorno un solo elemento html
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{brand}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/card">Card</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">Counter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todolist">TodoList</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rest-api">Rest API</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

// 5. Exporto el Componente
export default Navbar;
