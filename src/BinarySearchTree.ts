import { Node } from './Node';

export class BinarySearchTree<V> {
  /**
   * The root node of this Binary Search Tree
   */
  #rootNode: Node<V> | null;

  constructor() {
    this.#rootNode = null;
  }

  /**
   * Searches for a node in the Binary Search Tree
   * @param key The key of the node that is to be searched
   */
  search(key: number) {
    let currentNode = this.#rootNode;
    if (currentNode === null) return;
    while (currentNode) {
      if (key === currentNode.key) {
        return currentNode;
      } else if (key < currentNode.key) {
        currentNode = currentNode._leftChildNode;
      } else if (key > currentNode.key) {
        currentNode = currentNode._rightChildNode;
      }
    }
    return;
  }

 /**
  * Inserts a new node into the Binary Search Tree
  * @param key The key for the node
  * @param value The value to store in the node
  */
  insert(key: number, value?: V) {
    const newNode = new Node(key, value);
    if (this.#rootNode === null) {
      this.#rootNode = newNode;
      return this;
    }
    let currentNode = this.#rootNode;
    while (currentNode) {
      if (key === currentNode.key) {
        // TODO: implement support for duplicate keys
        return this;
      } else if (key < currentNode.key) {
        if (currentNode._leftChildNode === null) {
          currentNode._leftChildNode = newNode;
          return this;
        }
        currentNode = currentNode._leftChildNode;
      } else if (key > currentNode.key) {
        if (currentNode._rightChildNode === null) {
          currentNode._rightChildNode = newNode;
          return this;
        }
        currentNode = currentNode._rightChildNode;
      }
    }
    return this;
  }

  // TODO: implement delete method
}