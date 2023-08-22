import {ethers} from "hardhat"

const main = async () => {
    const signer = (await ethers.getSigners())[0]
    // const timelockAuthorizer =await ethers.deployContract("AuthorizerWithAdaptorValidation", [
    //     signer.address,
    //     signer.address,
    //     signer.address,
    // ])

    // await timelockAuthorizer.deployed()
    // console.log("timelockAuthorizer", timelockAuthorizer.address)

    const vault =await ethers.deployContract("Vault", [
        "0x8D4A63E8f549702Dc3D61F4c4CE78602992d8895",
        "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
        0,
        0
    ])
    console.log("vault", vault.address)
}

main()