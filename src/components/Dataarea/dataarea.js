import React, { Component } from "react";
import API from "../../utils/API";
import DataTable from  "../Datatable/datatable";
import Nav from "../Navbar/nav";

export default class DataArea extends Component {
  state = {
    results: [],
    sort: [],
    filteredUsers: [{}] 
  }

  componentDidMount() {
    console.log("go")
    API.getUsers()
    .then(res => this.setState({ 
      results: res.data.results,
      filteredUsers: res.data.results
    }))
    .catch(err => 
        console.log(err)
    );
  }

  handleSearch = event => {
    const target = event.target.value.toLocaleLowerCase();
    const filteredArr = this.state.results.filter( item => {
        let values = Object.values(item).join("").toLocaleLowerCase()
        return values.indexOf(target) !== -1;
    })

    this.setState({
      filteredUsers: filteredArr
    })
  };
  
  render() {
    console.log("hey", this.state.results)
    return (
      <div>
      <Nav
          handleSearch={this.handleSearch}
      />
      <DataTable 
          users={this.state.filteredUsers}
      />
      </div>
    );
  }
};