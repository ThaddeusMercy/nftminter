require("@nomiclabs/hardhat-etherscan");
var secret = require("./secret.json");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  etherscan: {
    apiKey: secret.POLYGONSCAN_API_KEY
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${secret.APP_ID}`,
      accounts: [secret.PRIVATE_KEY ]
    }
  },
  solidity: {
    version: "0.8.4",
  },
};
