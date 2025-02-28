import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Title from "./Title";
import Card from "./Card";

//create your first component
const cardTitle=["Title 1", "Title 2", "Title 3", "Title 4"]

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