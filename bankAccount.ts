import assert from "assert"

/** 
 *  Classe representando uma conta em um banco.
 *  Atenção: o banco não permite saldo negativo!
 * */
class BankAccount {
  private balance: number = 0

  // Deposita um valor na conta
  deposit(amount: number) {
    this.balance += amount
  }

  // Remove (saca) um valor da conta
  withdraw(amount: number): number {
    this.balance -= amount

    return amount
  }

  // Retorna o saldo atual da conta
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
assert.strictEqual(withdrawn, 900)

assert.strictEqual(account.getBalance(), 0)
console.log("Passou!")
