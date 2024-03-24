// SPDX-License-Identifier: MIT 
pragma solidity >=0.7.0 <0.9.0;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether, "Insufficient funds");
        players.push(msg.sender);
    }

    function random() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    }

    function pickWinner() public restricted {
        require(players.length > 0, "No players in the lottery");
        uint index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0); // Reset the players array
    }

    modifier restricted() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}