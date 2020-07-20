var ERupee = artifacts.require("./ERupee.sol");
var ERupeeSale = artifacts.require("./ERupeeSale.sol");

module.exports = function(deployer) {
  deployer.deploy(ERupee, 5000000000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(ERupeeSale, ERupee.address, tokenPrice);
  });
};
