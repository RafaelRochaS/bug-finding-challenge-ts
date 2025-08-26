import assert from "assert"

class BankAccount {
  private balance: number = 0

  deposit(amount: number) {
    this.balance += amount
  }

  withdraw(amount: number): number {
    this.balance -= amount

    return amount
  }

  getBalance() {
    return this.balance
  }
}

const account = new BankAccount()

console.log("Depositando 1000...")
account.deposit(1000)

assert.strictEqual(account.getBalance(), 1000)

console.log("Sacando 200...")
let withdrawn = account.withdraw(200)
assert.strictEqual(withdrawn, 200)

assert.strictEqual(account.getBalance(), 800)

console.log("Depositando 100...")
account.deposit(100)

assert.strictEqual(account.getBalance(), 900)

console.log("Sacando 1100...")
withdrawn = account.withdraw(1100)
assert.strictEqual(withdrawn, 1000)

assert.strictEqual(account.getBalance(), 0)
console.log("Passou!")
