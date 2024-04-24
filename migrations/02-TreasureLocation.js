
const TresureLocation = artifacts.require("TreasureLocation");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(TresureLocation, { from: accounts[0] });
}