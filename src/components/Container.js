import React, { Component } from "react";
import API from "../utils/API";
import DataArea from "./DataArea";
import Search from "./Search";
import Results from "./Results";
import { render } from "@testing-library/react";

export default class Main extends Component {
   
    render() {
        return (
            <div>
                <DataArea/>
            </div>
        );
    }

};
