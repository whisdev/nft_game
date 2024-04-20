const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer){}
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
