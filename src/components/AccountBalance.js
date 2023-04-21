/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  // Display account balance
  render() {
    const { creditList, debitList, accountBalance } = this.props;
    const balance = creditList.reduce((total, credit) => total + credit.amount, accountBalance) 
                  - debitList.reduce((total, debit) => total + debit.amount, 0);
    return (
      <div>
        Balance: {balance.toFixed(2)}
      </div>
    );
  }
}

export default AccountBalance;