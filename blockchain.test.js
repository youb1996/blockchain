const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    const blockchain = new Blockchain();

    it('contains a chain Array instance', () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('starts with the genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    })

    it('adds a new bloch to the chain', () => {
        const newData = 'foo bar';
        blockchain.addBloch({
            data: newData
        })
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
    })
    describe('isValidChain()', () => {
        describe('when the chain does not start with the genesis block', () => {
            it('returns false', () => {
                blockchain.chain[0]= {data: 'fake-genesis'}
                expect( blockchain.isValidChain(blockchain.chain)).toBe(false)
            });
        });

        describe('when the chain start with the genesis block and has multiple blocks',()=>{
            describe('and a lastHash reference has changed',()=>{
                it('returns false',()=>{

                });
            });
            describe('and the chain contains a block with an invalid field',()=>{
                it('returns false',()=>{

                });
            });

            describe('and the chain does not contain any invalid blocks',()=>{
                it('returns true',()=>{

                });
            });

        });

    });
});