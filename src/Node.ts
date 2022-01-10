export class Node<V> {
  /**
   * The key of this node
   */
  key: number;

  /**
   * The value stored in this node
   */
  value: V | undefined;

  /**
   * The left child of this node
   * @internal
   */
  _leftChildNode: Node<V> | null;

  /**
   * The right child of this node
   * @internal
   */
  _rightChildNode: Node<V> | null;

  /**
   * @param key The key for the node 
   * @param value The value that should be stored in the node
   */
  constructor(key: number, value?: V) {
    this.key = key;
    this.value = value;

    Object.defineProperty(this, '_leftChildNode',  { writable: true, enumerable: false });
    this._leftChildNode = null;

    Object.defineProperty(this, '_rightChildNode',  { writable: true, enumerable: false });
    this._rightChildNode = null;
  }
}