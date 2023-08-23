//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Game2 {
  uint public x;
  uint public y;

  function setX(uint _x) external {
    x = _x;
  }

  function setY(uint _y) external {
    y = _y;
  }

  event Winner(address winner);

  function win() public {
    require(x > 0, "x must be greater than 0");
    require(y > 0, "y must be greater than 0");
    require(x + y == 50, "x + y must equal 50");
    emit Winner(msg.sender);
}
}