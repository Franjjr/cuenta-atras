import React, { useState } from "react";

const [color, setColor] = useState("rojo");

export const Light = () => {
  const changeColor = (value) => {
    setColor(value);
  };

  return (
    <div id="semaforo">
      <div
        onClick={changeColor("rojo")}
        className={color == "rojo" ? "luz rojoIlu" : "luz rojo"}
      ></div>
      <div
        onClick={changeColor("amarillo")}
        className={color == "amarillo" ? "luz amarilloIlu" : "luz amarillo"}
      ></div>
      <div
        onClick={changeColor("verde")}
        className={color == "verde" ? "luz verdeIlu" : "luz verde"}
      ></div>
    </div>
  );
};
