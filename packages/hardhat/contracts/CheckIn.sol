// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry) Ownable(msg.sender) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkIn() external onlyOwner {
        batchRegistry.checkIn();
    }
} 