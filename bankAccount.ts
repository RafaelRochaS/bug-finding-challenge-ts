import assert from "assert"

class BankAccount {
  private balance: number = 0

  deposit(amount: number) {
    this.balance += amount
  }

  withdraw(amount: number) {
    this.balance -= amount
  }

  getBalance() {
    return this.balance
  }
}

const account = new BankAccount()
account.deposit(100)
account.withdraw(200)
assert.strictEqual(account.getBalance(), 0)
console.log("Passou!")
