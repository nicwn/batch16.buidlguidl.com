import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// The deployed BatchRegistry address on Arbitrum
const BATCH_REGISTRY_ADDRESS = "0xC23fB4a7EeA0EeE6Ff449a302eB9ac06828C8789"; // TODO: Replace with actual BatchRegistry address on Arbitrum

// The owner address for the CheckIn contract
const CHECKIN_OWNER = "0x48Bf488D00FE4C83e803688ffE5532EB83E9a0ff";

/**
 * Deploys the CheckIn contract to Arbitrum
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy CheckIn contract with BatchRegistry address
  await deploy("CheckIn", {
    from: deployer,
    args: [BATCH_REGISTRY_ADDRESS],
    log: true,
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
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
//deployYourContract.tags = ["BatchRegistry", "CheckIn"];
deployYourContract.tags = ["CheckIn"];
