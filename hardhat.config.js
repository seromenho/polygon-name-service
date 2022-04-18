const dotenv = require("dotenv");
dotenv.config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
