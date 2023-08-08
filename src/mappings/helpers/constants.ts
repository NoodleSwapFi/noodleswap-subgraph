import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

import { assets } from './assets';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProtocolFeeType {
  export const Swap = 0;
  export const FlashLoan = 1;
  export const Yield = 2;
  export const Aum = 3;
}

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export const SWAP_IN = 0;
export const SWAP_OUT = 1;

export let ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');

export let MIN_POOL_LIQUIDITY = BigDecimal.fromString('2000');
export let MIN_SWAP_VALUE_USD = BigDecimal.fromString('1');

export let FX_AGGREGATOR_ADDRESSES = assets.fxAggregators;
export let FX_TOKEN_ADDRESSES = assets.fxAssets;

export let USD_STABLE_ASSETS = assets.stableAssets;
export let PRICING_ASSETS = assets.stableAssets.concat(assets.pricingAssets);

class AddressByNetwork {
  public base: string;
  public baseGoerli: string;
  public dev: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  base: '',
  baseGoerli: '0x1ab40126513036458e00Cc827FFd9e7D0436219d',
  dev: '',
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == 'base') {
    return Address.fromString(addressByNetwork.base);
  } else if (network == 'base-goerli') {
    return Address.fromString(addressByNetwork.baseGoerli);
  } else {
    return Address.fromString(addressByNetwork.dev);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
