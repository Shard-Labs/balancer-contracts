import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-ignore-warnings';

import { hardhatBaseConfig } from '@balancer-labs/v2-common';
import { name } from './package.json';

import { task } from 'hardhat/config';
import { TASK_COMPILE } from 'hardhat/builtin-tasks/task-names';
import overrideQueryFunctions from '@balancer-labs/v2-helpers/plugins/overrideQueryFunctions';

task(TASK_COMPILE).setAction(overrideQueryFunctions);

export default {
  solidity: {
    compilers: hardhatBaseConfig.compilers,
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    overrides: { ...hardhatBaseConfig.overrides(name) },
  },
  warnings: hardhatBaseConfig.warnings,

  networks: {
    testnet: {
      url: "https://testnet.aurora.dev",
      accounts: ["0xdead221c369694331486401b33e1b301c4933053720915ba8e187410562ca80d"],
    },
    mainnet: {
      url: 'https://mainnet.aurora.dev/',
      accounts: ["0xdead221c369694331486401b33e1b301c4933053720915ba8e187410562ca80d"],
    },
  },
};
