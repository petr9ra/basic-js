import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length - 1 || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = `${this.chain.join('~~')}`;
    this.chain = [];
    return result;
  }
};
