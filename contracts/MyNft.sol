// contracts/MyNft.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNft is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyNft", "MFT") {}

    function mint(address, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        await NFT.mint("ipfs://bafyreifb66oh47ihkvdernd5l2opda3zxxk3zih4gjm7lxdbqdarityyca/metadata.json");
        await NFT.mint("ipfs://bafyreiee5yyxubdyv6wqqbwjukkaqa6qgd4bt7uypfeo4n362kjmvfehsy/metadata.json");
        await NFT.mint("ipfs://bafyreihgybogg7rxf6xvbp6dl3gqotzzibjumwlsej76a5cymsyykjnj44/metadata.json");
        return newItemId;
    }
}