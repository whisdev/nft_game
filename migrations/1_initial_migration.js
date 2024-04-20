const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer){ hello.js }
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
