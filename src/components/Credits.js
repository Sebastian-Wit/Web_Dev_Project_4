/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";

const Credits = (props) => {
  const creditList = props.credits.map((credit) => {
    const date = new Date(credit.date);
    const formattedDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const roundedAmount = credit.amount.toFixed(2);

    return (
      <li key={credit.id}>
        <p>Description: {credit.description}</p>
        <p>Amount: ${roundedAmount}</p>
        <p>Date: {formattedDate}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>Credits</h1>
      <br />
      <Link to="/">Return to Home</Link>
      <br />
      <br />
      <h2>Credit List</h2>
      <ul>{creditList}</ul>
    </div>
  );
};

export default Credits;