import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = ({cardProp}) => {
  
	return (
   <div className= "container">   
    <div className="card rounded-1" style={{ width: "18rem"}}>
      <div className="card-body">
        <img src={cardProp.img} class="card-img-top img-fluid" style={{ width: "100%", height: "200px", objectFit: "cover" }} 
         alt="..."/>
        <h5 className="card-title">{cardProp.title}</h5>
        <p className="card-text">{cardProp.paragraph}</p>
        <button type="button" class="btn btn-primary">Explore Packages</button>
      </div>
      </div>
    </div>
  );
};


export default Card;