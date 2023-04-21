/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  //Calculate Account Balance with Credit and Debit array values
  calculateBalance() {
    const { creditList, debitList } = this.props;
    const creditTotal = creditList.reduce((acc, credit) => acc + credit.amount, 0);
    const debitTotal = debitList.reduce((acc, debit) => acc + debit.amount, 0);
    return creditTotal - debitTotal;
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