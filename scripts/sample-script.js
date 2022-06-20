// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MyNft = await hre.ethers.getContractFactory("MyNft");
  const nft = await MyNft.deploy();

  await nft.deployed();

  console.log("NFT address:", nft.address);
  await nft.mint("ipfs://bafyreifb66oh47ihkvdernd5l2opda3zxxk3zih4gjm7lxdbqdarityyca/metadata.json");
  await nft.mint("ipfs://bafyreiee5yyxubdyv6wqqbwjukkaqa6qgd4bt7uypfeo4n362kjmvfehsy/metadata.json");
  await nft.mint("ipfs://bafyreihgybogg7rxf6xvbp6dl3gqotzzibjumwlsej76a5cymsyykjnj44/metadata.json");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
