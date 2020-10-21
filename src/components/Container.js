import React, { Component } from "react";
import API from "../utils/API";
import Search from "./Search";
import Results from "./Results";
import { render } from "@testing-library/react";

Container extends Component {
    state = {
        results: [],
        sort: [],
    }
};

componentDidMount() {
    API.getUsers()
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => 
        console.log(err)
    );
}


render() {
    return (
        <div>
            {/* Results and handler here */}
        </div>
    );
}


export default Container;
