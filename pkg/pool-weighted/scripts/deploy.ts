import {ethers} from "hardhat"

const main = async () => {
    const signer = (await ethers.getSigners())[0]
    const vault =await ethers.deployContract("WeightedPoolFactory", [
        "0x408D42AF20e8B544588d2c32E8290b373D2dA5d2",
        "0x0fD31751EdA45C422561913B1db9e4C427880545",
        10,
        10
    ])
    console.log("vault", vault.address)
}

main()