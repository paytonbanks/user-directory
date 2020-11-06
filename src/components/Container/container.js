import React, { Component } from "react";
import DataArea from "../Dataarea/dataarea";

export default class Main extends Component {
   
  render() {
    return (
      <div className="container-fluid bg-dark" style={{ height: '100vh', overflow: 'scroll' }}>
          <DataArea/>
      </div>
    );
  }
};

