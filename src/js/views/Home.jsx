// 1. importar React y todos lo import
import React from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import { Title } from "../component/Title.jsx";
import { Members }  from "../component/Members.jsx";
import { Card } from "./Card.jsx";
import { Counter } from "./Counter.jsx";
// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import python from '../../img/logo-python.png';
import react from '../../img/logo-reactjs.png';
import hcht from '../../img/logo-hcht-uk.jpg';
import { ExampleForm } from "./ExampleForm.jsx";
import { TodoList } from "../component/TodoList.jsx";
import { TodoListRestAPI } from "../component/TodoListRestAPI.jsx";


// 2. Create your first component, primera en letra en Mayúscula.
const Home = () => {
	// 3. Código JS
	const title = 'Fetch - Async Await';
	const subtitle = '';
	const description = '';

	// 4. Definir el return q devuelve 1 solo elementeo HTML
	return (
		<div className="text-center">
			<Navbar/>
			<Title title={title} subtitle={subtitle} description={description} />
			<Counter/>
			{/* <div className="container">
				<Card image={hcht} title='Héctor Chocobar'/>
				<Card image={python} title='Python' btn="Abrir nueva pestaña"/>
				<Card image={react}  title='React'/>
				<Card image={rigoImage} title='4Geeks Academy'/>
			</div> */}
			<ExampleForm />
			{/* <TodoList />*/}
			<TodoListRestAPI/>
			<Footer />
		</div>
	);
};

// 5. exporto el componente
export default Home;
