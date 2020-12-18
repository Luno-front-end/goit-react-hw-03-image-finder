import React, { Component } from "react";
import Loader from "react-loader-spinner";

import "../styles/styles.css";

export default class App extends Component {
  //other logic
  render() {
    return (
      <div>
        <div className="loader">
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={200}
            width={200}
          />
        </div>
      </div>
    );
  }
}
