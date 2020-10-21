import React, { Component } from "react";
import API from "../utils/API";
import DataTable from  "./DataTable";
import Search from "./Search";
import Results from "./Results";
import { render } from "@testing-library/react";

export default class DataArea extends Component {
    state = {
        results: [],
        sort: [],
    }


    componentDidMount() {
        console.log("go")
        API.getUsers()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => 
            console.log(err)
        );
    }


    render() {
        console.log("hey", this.state.results)
        return (
            <div>
            nav bar here
            <DataTable 
                    users={this.state.results}
            />
            </div>
        );
    }


};