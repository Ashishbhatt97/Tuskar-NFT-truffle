
const Tuskar = artifacts.require("Tuskar");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Tuskar, { from: accounts[0] });
}
