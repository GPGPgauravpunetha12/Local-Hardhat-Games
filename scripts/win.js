// add the game address here and update the contract name if necessary
const  gameAddress ="0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddress);

    // Game 2
    // const x=await game.setX(10);
    // const y=await game.setY(40);

    // Game-3 
    // const tx = await game.win(45);

    // Game-4
   
    // const tx = await game.win(56);
    // You can pass x=56 as the parameter to win(). Note that the original contract use unchecked,
    //  which means you can use the overflow feature of it. For uint8, (x+210) % 256 = 10 => x = 56。

    // Game-5
  
    const give=await game.giveMeAllowance(12000);
    const mint=await game.mint(11000);
    const tx = await game.win();
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
