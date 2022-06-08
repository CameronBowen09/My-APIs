// Create the block class with a file called block.js. Each black has a `hash`, `lastHash`, and `timestamp` attribute.
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    toString() {
        return `Block -
              Timestamp : ${this.timestamp}
              Last Hash : ${this.lastHash.substring(0, 10)}
              Hash      : ${this.hash.substring(0, 10)}
              Data      : ${this.data}`;
    }
    // Every blockchain starts with the “genesis block” - a default dummy block to originate the chain.
    static genesis() {
        return new this('Genesis time', '-----', 'f1r57-h45h', []);
    }
    /*
    Add a function to add a generate a block based off of some provided `data` to store, and a given `lastBlock.` Call the function `mineBlock`. 
    Generating a block is equated to an act of mining since it takes computational power to “mine” the block. Later on, we’ll make the demand for spending 
    computational power more explicit.
    */
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
    static blockHash(block) {
        const { timestamp, lastHash, data } = block;
        return Block.hash(timestamp, lastHash, data);
    }
}

module.exports = Block;