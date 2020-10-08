import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { getProductsError, getProducts, getProductsPending } from "../reducers";
import fetchChicken from "../actions/fetchChicken";
import ProductList from "./ProductList";

import uuid from "uuid/dist/v1";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Chicken extends Component {
  componentWillMount() {
    const { fetchChicken } = this.props;
    fetchChicken();
  }

  shouldComponentRender = () => {
    const { pending } = this.props;
    if (pending === false) return false;
    // more tests
    return true;
  };
  render() {
    const { products } = this.props;

    const productCard = products.map((item) => {
      return (
        <Link
          key={uuid()}
          to={`/${item.title
            .split(" ")
            .map((i, r) => {
              const text = item.title.split(" ");
              if (r === 0) {
                return "steps/" + i + "-";
              } else if (r !== 0 && r !== text.length - 1) {
                return i + "-";
              } else return i;
            })
            .join("")
            .toLowerCase()}`}
        >
          <ProductList
            key={item.id}
            name={item.title}
            like={item.aggregateLikes}
            image={item.image}
          />
        </Link>
      );
    });
    return (
      <div className="random-container">
        <h1>Chicken Recipes</h1>
        <div className="random-grid">{productCard}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchChicken: fetchChicken,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Chicken);
