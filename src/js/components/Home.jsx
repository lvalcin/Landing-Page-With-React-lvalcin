import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Title from "./Title";
import Card from "./Card";
import Footer from "./Footer"

//create your first component
const cardObj=[
		{title:"Carribean/Latin America",
		img: "https://images.unsplash.com/photo-1638832406094-b7c061f7e02e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		paragraph: "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisis nascetur pharetra primis tortor conubia praesent tempus.Dui fermentum litora natoque egestas. Id ultrices non. Vel dictum penatibus ipsum eleifend congue.",
		},
		{title:"Africa",
		img: "https://images.unsplash.com/photo-1611693196679-c1f358840cc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		paragraph: "Nibh finibus bibendum morbi pretium odio. Faucibus parturient nascetur inceptos nec morbi finibus. Morbi libero vehicula per mattis quisque dis; inceptos egestas. Nunc cubilia accumsan curabitur nisl sit convallis nisi.",
		},
		{title:"Asia/Middle East",
		img: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		paragraph: "Nunc cubilia accumsan curabitur nisl sit convallis nisi. Habitasse ultrices lacus vivamus ornare blandit. Placerat neque odio in magna magna donec? Facilisi proin velit proin; ridiculus ornare quis feugiat pretium quam.",
		},
		{title:"Europe",
		img: "https://images.unsplash.com/photo-1546610072-90a8cdd6aa4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		paragraph: "Nisl quisque rutrum metus facilisi quisque justo sodales egestas. Et taciti pretium porttitor dictum bibendum. Lacinia nibh condimentum feugiat vel convallis. Mauris nullam parturient sodales quis aliquam eu  habitasse. ",
		}

]
	
const Home = () => {
	return (
		<div className="text-center">
            <Navbar />
			<Title />
				<div className="container-fluid">
				<div className = "row"> 
					{cardObj.map(
						(item)=>{
							return(
								<div className="col-md-3 col-sm-6 col-12 mb-2">
								<Card cardProp ={item} />
								</div>
									)	
									}
								)}
				</div>
				</div>
			
			<Footer />
		</div>
	);
};

export default Home;