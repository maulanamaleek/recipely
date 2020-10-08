import React, { Component } from "react";
import Random from "./components/home/index";
import NavBar from "./components/home/NavBar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/home/Footer";
import Steps from "./components/home/Steps";
import Vegetarian from "./components/home/Vegan";
import Chicken from "./components/home/Chicken";
import Meat from "./components/home/Meat";
import Seafood from "./components/home/Seafood";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Random} />
          <Route path="/steps/" component={Steps} />
          <Route path="/vegetarian" component={Vegetarian} />
          <Route path="/chicken" component={Chicken} />
          <Route path="/seafood" component={Seafood} />
          <Route path="/meat" component={Meat} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
