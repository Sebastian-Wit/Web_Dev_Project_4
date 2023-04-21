/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditList: [],
    };
  }

  componentDidMount() {
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then((response) => response.json())
      .then((data) => this.setState({ creditList: data }));
  }

  render() {
    const credits = this.state.creditList.map((credit) => (
      <li key={credit.id}>
        {credit.description} - ${credit.amount.toFixed(2)} - {credit.date}
      </li>
    ));

    return (
      <div>
        <h1>Credits</h1>
        <ul>{credits}</ul>
        <br />
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Credits;