const ListNode = require('../extensions/list-node');
/* Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.names = [];
  }

  get size() {
    return this.names.length;
  }

  enqueue(element) {
    const hio2 = new ListNode();
    if (!element) {
      return hio2;
    }
    this.names.push(element);
    return '';
  }

  dequeue() {
    const hio3 = new ListNode();
    if (!this.names) {
      return hio3;
    }
    return this.names.shift();
  }
}

module.exports = Queue;
