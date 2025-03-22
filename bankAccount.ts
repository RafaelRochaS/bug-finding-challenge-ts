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

console.log("Depositando...")
account.deposit(100)

console.log("Sacando...")
account.withdraw(200)

assert.strictEqual(account.getBalance(), 0)
console.log("Passou!")
