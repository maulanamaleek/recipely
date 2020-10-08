import React from "react";

export default function ProductList(props) {
  return (
    <div className="products-view">
      <img src={props.image} alt="Food" />
      <h3 className="products-name">{props.name}</h3>
      <p>{props.like} Likes</p>
    </div>
  );
}
