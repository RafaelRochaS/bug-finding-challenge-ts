import assert from "assert"

class Stack {
  private items: number[] = []

  push(item: number) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }
}

const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(15)
assert.strictEqual(stack.pop(), 15)
assert.strictEqual(stack.pop(), 10)
assert.strictEqual(stack.pop(), 5)
assert.strictEqual(stack.pop(), null)
console.log("Passou!")
