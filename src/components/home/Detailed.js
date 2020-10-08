import React, { Component } from "react";
import { Markup } from "interweave";

export default class Detailed extends Component {
  handle() {
    return this.props.step.steps.map((item) => {
      return (
        <li className="steps-list" key={this.props.name}>
          {item.step}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="step-detail">
        <h1>{this.props.name}</h1>
        <span className="likes"> ❤ {this.props.likes}</span>
        <img src={this.props.image} alt="p" />
        <h2>Summary</h2>
        <Markup content={this.props.summary} />
        <h2>Steps</h2>
        <ol className="steps-container">{this.handle()}</ol>
      </div>
    );
  }
}
