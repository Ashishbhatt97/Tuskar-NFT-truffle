// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract TreasureLocation {
    address gameSetter;
    uint256 location;

    constructor() {
        gameSetter = msg.sender;
    }

    function setTreasureLocation1(uint256 _location) external {
        require(
            gameSetter == msg.sender,
            "You cannot assign any kind of new location"
        );
        location = _location;
    }

    function setTreasureLocation2(uint256 _location) external {
        location = _location;
        require(
            gameSetter == msg.sender,
            "You cannot assign any kind of new location"
        );
    }
}
