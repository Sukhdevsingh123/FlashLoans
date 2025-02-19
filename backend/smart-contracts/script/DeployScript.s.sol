// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Script, console} from "forge-std/Script.sol";
import {MyToken} from "../src/MyToken.sol";
import {LendingBorrowing} from "../src/LendingBorrowing.sol";

contract DeployContracts is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy MyToken with 1 million tokens
        MyToken myToken = new MyToken(1000000);

        // Deploy LendingBorrowing with the token address
        LendingBorrowing lendingBorrowing = new LendingBorrowing(address(myToken));

        console.log("MyToken deployed at:", address(0xb7853fA770bC088772CF406c3a0e6b86D2Dc6ED0));
        console.log("LendingBorrowing deployed at:", address(0xb15e912752618F89eb2Cb78ACFF6B9259EA3B22d));

        vm.stopBroadcast();
    }
}
