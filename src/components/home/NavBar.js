import React from "react";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <h2>Recipely</h2>

        <div className="navbar-link">
          <Link to="/recipely">
            <p>Random</p>
          </Link>
          <Link to="/seafood">
            <p>Seafood</p>
          </Link>
          <Link to="/vegetarian">
            <p>Vegetarian</p>
          </Link>
          <Link to="/meat">
            <p>Meat</p>
          </Link>
          <Link to="/chicken">
            <p>Chicken</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
