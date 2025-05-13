import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
//const BATCH_NUMBER = "16";

// The deployed BatchRegistry address on Arbitrum
const BATCH_REGISTRY_ADDRESS = "0xC23fB4a7EeA0EeE6Ff449a302eB9ac06828C8789"; // TODO: Replace with actual BatchRegistry address on Arbitrum

// The owner address for the CheckIn contract
const CHECKIN_OWNER = "0x48Bf488D00FE4C83e803688ffE5532EB83E9a0ff";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy BatchRegistry first
  /*
  await deploy("BatchRegistry", {
    from: deployer,
    // Contract constructor arguments
    args: [deployer, BATCH_NUMBER],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  const batchRegistryAddress = await batchRegistry.getAddress();
  console.log("\nBatchRegistry deployed to:", batchRegistryAddress);
  console.log("Owner set to:", deployer);
  console.log("Remember to update the allow list!\n");
  */

  // Estimate gas for CheckIn deployment
  // const CheckIn = await hre.ethers.getContractFactory("CheckIn");
  // const deployTx = await CheckIn.getDeployTransaction(BATCH_REGISTRY_ADDRESS);
  // const gasEstimate = deployTx.gasLimit || BigInt(0);
  // const gasPrice = await hre.ethers.provider.getFeeData();
  // const currentGasPrice = gasPrice.gasPrice || BigInt(0);

  // console.log("\nDeployment Gas Estimate:");
  // console.log("Gas Limit:", gasEstimate.toString());
  // console.log("Gas Price:", currentGasPrice.toString(), "wei");
  // console.log("Estimated Cost:", (gasEstimate * currentGasPrice).toString(), "wei");
  // console.log("Estimated Cost in ETH:", hre.ethers.formatEther(gasEstimate * currentGasPrice), "ETH\n");

  // Deploy CheckIn contract with BatchRegistry address
  await deploy("CheckIn", {
    from: deployer,
    //args: [batchRegistryAddress],
    args: [BATCH_REGISTRY_ADDRESS],
    log: true,
    autoMine: true,
  });

  // Get the deployed CheckIn contract
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  const checkInAddress = await checkIn.getAddress();
  console.log("CheckIn contract deployed to:", checkInAddress, "\n");

  // Transfer ownership to the specified address
  console.log("Transferring ownership to:", CHECKIN_OWNER);
  const transferTx = await checkIn.transferOwnership(CHECKIN_OWNER);
  await transferTx.wait();
  console.log("Ownership transferred successfully!\n");

  /*
  // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
  console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
  */
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
//deployYourContract.tags = ["BatchRegistry", "CheckIn"];
deployYourContract.tags = ["CheckIn"];
