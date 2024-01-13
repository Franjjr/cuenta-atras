//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/style.css";

//import your own components
import { Light } from "./component/Luces.jsx";

//render your react application
ReactDOM.render(<Light />, document.querySelector("#root"));
