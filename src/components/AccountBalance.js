/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  //Calculate Account Balance with Credit and Debit array values
  calculateBalance() {
    let balance = 1234567.89;
    for (let i = 0; i < this.props.creditList.length; i++){
      balance += this.props.creditList[i].amount;
    }
    for (let i = 0; i < this.props.debitList.length; i++){
      balance -= this.props.debitList[i].amount;
    }
    return balance;
  }

  // Display account balance
  render() {
    return (
      <div>
        Balance: {this.calculateBalance()}
      </div>
    );
  }
}

export default AccountBalance;