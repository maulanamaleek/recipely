import React, { Component } from "react";
import { getProductsError, getProducts, getProductsPending } from "../reducers";
import { connect } from "react-redux";
import Detailed from "./Detailed";

class Steps extends Component {
  abc() {
    return this.props.products
      .filter(
        (item) =>
          item.title.toLowerCase().split(" ").join("") ===
          window.location.pathname.split("/")[2].split("-").join("")
      )
      .map((a) => {
        return (
          <div key={a.id}>
            <Detailed
              step={a.analyzedInstructions[0]}
              image={a.image}
              name={a.title}
              summary={a.summary}
              likes={a.aggregateLikes}
            />
          </div>
        );
      });
  }
  render() {
    return <div>{this.abc()}</div>;
  }
}

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

export default connect(mapStateToProps)(Steps);
