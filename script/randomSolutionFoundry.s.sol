// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {Random} from "../contracts/challenges/random/public/contracts/Random.sol";
import {Setup} from "../contracts/challenges/random/public/contracts/Setup.sol";

contract RandomSolutionFoundry is Script {
    Setup public setupContract = Setup(0x14Db06E6E39bB4C17b1f49bc88336808952282f4);
    Random public challengeContract;

    function run() public {
        vm.startBroadcast();
        challengeContract = setupContract.random();
        console2.log("challengeContract solved: %s", challengeContract.solved());
        challengeContract.solve(4);
        console2.log("challengeContract solved: %s", challengeContract.solved());
    }
}

// succeeded with following call:
// > forge script script/randomSolutionFoundry.s.sol --private-key 0xbb491b586a1f07f665d7fd7b598fa85b90a1810a27ffda7e1c0ac85b8fe3464f --rpc-url http://127.0.0.1:8545/31e1d743-b674-4cc2-a01a-4720a314997e --broadcast -vvvv;
