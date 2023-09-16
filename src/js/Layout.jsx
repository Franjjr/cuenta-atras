import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importar Componentes
import Navbar from "./component/Navbar.jsx";
import { Title } from "./component/Title.jsx";
import Footer from "./component/Footer.jsx";
// Importar Vistas
import { Members } from "./views/Members.jsx";
import { Card } from "./views/Card.jsx";
import { Counter } from "./views/Counter.jsx";
import { ExampleForm } from "./views/ExampleForm.jsx";
import { TodoList } from "./views/TodoList.jsx";
import { TodoListRestAPI } from "./views/TodoListRestAPI.jsx";


export const Layout = () => {

  return (
    <div className="container-fluid text-center">
      <BrowserRouter>
        <Navbar/>
        <Title title={"Vistas"} subtitle={"React Router DOM"}/>
        <Routes>
          <Route element={<Members />} path="/" />
          <Route element={<Card />} path="/card" />
          <Route element={<Counter />} path="/counter" />
          <Route element={<ExampleForm />} path="/form" />
          <Route element={<Counter />} path="/todolist" />
          <Route element={<TodoListRestAPI />} path="/rest-api" />
          {/* <Route element={<Products />} path="/products/:categoryid" /> */}
          <Route path="*" element={<h1>Page Not found!</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}