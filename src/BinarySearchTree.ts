import { Node } from './Node';

export class BinarySearchTree<V> {
  /**
   * The root node of this Binary Search Tree
   */
  #rootNode: Node<V> | null;

  /**
   * The number of nodes in the Binary Search Tree
   */
  size: number;

  constructor() {
    this.#rootNode = null;
    this.size = 0;
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
    this.size++;
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

   /**
    * Returns an array of node keys
    * @param traversal The type of traversal to use
    * @default 'inorder'
    */
  keys(traversal: TraversalType = 'inorder') {
    const keys: Array<number> = [];
    if (traversal === 'inorder') {
      this.#inorderTraversal(keys, this.#rootNode, 'key');
    }
    // TODO: implement other traversal methods
    return keys;
  }

  /**
   * Returns an array of node values
   * @param traversal The type of traversal to use
   * @default 'inorder'
   */
  values(traversal: TraversalType = 'inorder') {
    const values: Array<V | undefined> = [];
    if (traversal === 'inorder') {
      this.#inorderTraversal(values, this.#rootNode, 'value');
    }
    return values;
  }

  /**
   * Returns an array of `[key, value]` pairs for each node
   * @param traversal The type of traversal to use
   * @default 'inorder'
   */
  entries(traversal: TraversalType = 'inorder') {
    const keyValuePairs: Array<KeyValueTuple<V>> = [];
    if (traversal === 'inorder') {
      this.#inorderTraversal(keyValuePairs, this.#rootNode, 'entry');
    }
    return keyValuePairs;
  }

  #inorderTraversal(store: Array<V | undefined | number | KeyValueTuple<V>>, currentNode: Node<V> | null, storeType: 'key' | 'value' | 'entry') {
    if (currentNode !== null) {
      this.#inorderTraversal(store, currentNode._leftChildNode, storeType);
      switch (storeType) {
        case 'key':
          store.push(currentNode.key);
          break;
        case 'value':
          store.push(currentNode.value);
          break;
        case 'entry':
          store.push([currentNode.key, currentNode.value]);
          break;
        default:
          break;
      }
      this.#inorderTraversal(store, currentNode._rightChildNode, storeType);
    }
  }

  // TODO: implement delete method
}

export type TraversalType = 'inorder' | 'preorder' | 'postorder';

export type KeyValueTuple<V> = [number, V | undefined];