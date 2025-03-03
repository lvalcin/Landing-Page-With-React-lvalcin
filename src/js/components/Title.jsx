import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Title = () => {
	return (
		<div className="container border border-warning-subtle rounded-1 bg-warning-subtle p-5 mb-4">
            <h1>Your Next Adventure Awaits!</h1>
			<p>Ready to book you next getaway? Look no further. All you have to do is pack your bags. 
				We will take care of the rest. Let's create your next escape!
			</p>
			<button type="button" class="btn btn-primary">Let's Get Started</button>
		</div>
	);
};

export default Title;