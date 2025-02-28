import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Title from "./Title";
import Card from "./Card";

//create your first component
const cardTitle=["Carribean/Latin America", "Africa", "Asia/Middle East", "Europe"]
const cardText = "This is an example text.";
const buttonText = "Click Me"; 
const buttonLink = "#";

const Home = () => {
	return (
		<div className="text-center">
            <Navbar />
			<Title />
			{cardTitle.map(
				(item)=>{
					return(
						<div>
							<Card propTitle={item} />
						</div>
					)	
				}
			)}


		</div>
	);
};

export default Home;