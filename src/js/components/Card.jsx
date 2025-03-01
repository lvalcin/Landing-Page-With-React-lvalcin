import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = ({cardProp}) => {
  console.log(cardProp.title, "here is the title")
	return (
   <div className= "container">
    

    <div className="card rounded-1 d-flex" style= {{ width: "16rem" }}>
      <div className="card-body">
        <img src={cardProp.img} class="card-img-top" alt="..."/>
        <h5 className="card-title">{cardProp.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">cardProp.paragrph</h6>
        <p className="card-text">cardProp.paragrph</p>
        <button type="button" class="btn btn-primary">Explore Packages</button>
      </div>
    </div>

    </div>
  );
};


export default Card;