import React from "react";
import Navbar from './navbar.jsx';
import Container from './container.jsx';
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';
import Footer from './footer.jsx'
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Container />
			<Jumbotron />
			<Card />
			<Footer />
		</>
	);
};


export default Home;
