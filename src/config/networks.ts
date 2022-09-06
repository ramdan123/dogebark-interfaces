import { ChainId } from '@dogebark/sdk'

const DogeChain = 'https://raw.githubusercontent.com/dogmoneyswap/icons/master/network/dogechain.jpg'

export const NETWORK_ICON = {
  [ChainId.DOGECHAIN]: DogeChain,
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
  [ChainId.DOGECHAIN]: 'DogeChain',
}
