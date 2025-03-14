import assert from "assert"

class Queue {
  private items: number[] = []

  enqueue(item: number) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.pop()
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
assert.strictEqual(queue.dequeue(), 1)
console.log("Passou!")
