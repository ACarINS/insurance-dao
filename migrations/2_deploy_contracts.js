var InsuranceCompany = artifacts.require("./InsuranceCompany.sol");
var DriverContract = artifacts.require("./DriverContract.sol");

module.exports = function(deployer) {
  deployer.deploy(InsuranceCompany);
};
