import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Title from "./Title";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar />
			<Title />
			<Card />

		</div>
	);
};

export default Home;