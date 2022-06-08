const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);

        return block;
    }
    /*
    Chain validation ensures that incoming chains are not corrupt once there are multiple contributors to the blockchain. To validate a 
    chain, make sure it starts with the genesis block. Also, ensure that its hashes are generated properly.
    */
    isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i - 1];
            if (
                block.lastHash !== lastBlock.hash ||
                block.hash !== Block.blockHash(block)
            ) {
                return false;
            }
        }
        return true;
    }
    /*
    If another contributor to a blockchain submits a valid chain, replace the current chain with the incoming one. Only replace chains that 
    are actually longer than the current chain. Handle this with a `replaceChain` function in the `Blockchain` class:
    */
    replaceChain(newChain) {
        if (newChain.length <= this.chain.length) {
            console.log('Received chain is not longer than the current chain.');
            return;
        } else if (!this.isValidChain(newChain)) {
            console.log('The received chain is not valid.');
            return;
        }

        console.log('Replacing blockchain with the new chain.');
        this.chain = newChain;
    }
}

module.exports = Blockchain;