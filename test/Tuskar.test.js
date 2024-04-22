const Tuskar = artifacts.require("Tuskar");


contract("Tuskar", (accounts) => {
    it("Should credit NFT to an Specific Account", async () => {
        const tuskarInstance = await Tuskar.deployed();
        await tuskarInstance.safeMint(accounts[1], "tuskar_1.json");
        assert.equal((await tuskarInstance.ownerOf(0), accounts[1], "Owner of token 1 is not equal to account 2"));
    })
})