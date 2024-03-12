/*
Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. There is an `account` object
in which it is necessary to implement methods for working with balance and
transaction history.

*/

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const transactionTypes = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Each transaction is an object with properties: id, type and amount
 */
const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {
    let greatestId = 0;
    for (const transaction of this.transactions) {
      if (transaction.id > greatestId) {
        greatestId = transaction.id;
      }
    }

    return {
      id: greatestId + 1,
      amount,
      type,
    };
  },

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(
      amount,
      transactionTypes.DEPOSIT
    );
    this.transactions.push(transaction);
  },

  /*
   *The method responsible for withdrawing the amount from the balance.
   * Принимает сумму танзакции.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Not enough funds");
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(
      amount,
      transactionTypes.WITHDRAW
    );
    this.transactions.push(transaction);
  },

  /*
   * The method returns the current balance
   */
  getBalance() {
    return this.balance;
  },

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id !== id) {
        return transaction;
      }
    }
  },

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

account.deposit(12);
account.deposit(13);

account.withdraw(20);
account.withdraw(20);

console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(2));

console.log(
  "deposit total:",
  account.getTransactionTotal(transactionTypes.DEPOSIT)
);
console.log(
  "withdraw total:",
  account.getTransactionTotal(transactionTypes.WITHDRAW)
);
