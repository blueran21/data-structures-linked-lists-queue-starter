const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this.length;
        // Write your hypothesis on the time complexity of this method here O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) {
            return null;
        }
        let removedNode = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length -= 1;
        return removedNode.value;
        // Write your hypothesis on the time complexity of this method here O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
