import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = ({propTitle}) => {
	return (
   <div className= "text-center">
        this is my card

    <div className="card" style= {{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{propTitle}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

    </div>
  );
};


export default Card;