
const TresureLocation = artifacts.require("TreasureLocation");

module.exports = function (deployer, network, accounts) {
    console.log(accounts[0]);
    deployer.deploy(TresureLocation);
}