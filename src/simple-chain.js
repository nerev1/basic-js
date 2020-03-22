const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!arguments.length) this.chain.push('');
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if ((typeof position != 'number') || 
    (position - Math.floor(position) != 0) || 
    (position < 1) ||
    (position > this.getLength())) {
      this.chain = [];
      throw new Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.chain.forEach( (item, index) => {
      result += '( ' + item + ' )';
      result += (index == this.chain.length - 1) ? '' : '~~';
    });
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;