import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { getProductsError, getProducts, getProductsPending } from "../reducers";
import fetchProducts from "../actions/Fetch";
import ProductList from "./ProductList";

import uuid from "uuid/dist/v1";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Random extends Component {
  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
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
            key={uuid()}
            name={item.title}
            like={item.aggregateLikes}
            image={item.image}
          />
        </Link>
      );
    });
    return (
      <div className="random-container">
        <h1>Random Recipes</h1>
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
      fetchProducts: fetchProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Random);
