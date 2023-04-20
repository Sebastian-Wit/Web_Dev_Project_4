/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  // Display account balance
  render() {
    const creditTotal = this.props.creditList.reduce(
      (total, credit) => total + credit.amount,
      0
    );
    const debitTotal = this.props.debitList.reduce(
      (total, debit) => total + debit.amount,
      0
    );
    const accountBalance = creditTotal - debitTotal;

    return (
      <div>
        Balance: {this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;