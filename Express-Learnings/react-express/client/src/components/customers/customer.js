import React, { Component } from "react";
class Custemors extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    }
  }
  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log("customers fetched"), customers)
    );
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => <li key = {customer.id}>{ customer.firstName}</li> )}
        </ul>   
      </div>
    );
  }
}

export default Custemors;
