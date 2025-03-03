import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
    return (
        <div className="text-center">
      <ul class="nav bg-danger-subtle mb-4">
          <li class="nav-item h5 ms-5">
            <a class="nav-link text-dark-emphasis" href="#">Your Next Getaway</a>
          </li>
          <li class="nav-item ms-auto">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link " href="#">Services</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item me-5">
            <a class="nav-link disabled " href="#">Contact US</a>
          </li>
      </ul>

        </div>
    );
};

export default Navbar;