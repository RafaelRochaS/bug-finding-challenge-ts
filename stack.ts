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
assert.strictEqual(stack.pop(), 5)
console.log("Passou!")
