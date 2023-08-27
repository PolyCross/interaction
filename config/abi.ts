import { parseAbi } from "viem"

const temp_erc20 = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function transfer(address to, uint256 amount) public returns (bool)",
    "function mint(address account, uint256 amount) public"
]

export const ERC20_ABI = parseAbi(temp_erc20)

const temp_bridge = [
    "function supportNewToken(address token) public",
    "function addReserve(address token, uint256 amount) public",
    "function bridgeIn(address token, uint256 amount, address operator) public"
]

export const Bridge_ABI = parseAbi(temp_bridge)

const temp_bridge_swap = [
    "function initPool(address tokenA, address tokenB, uint256 amountA, uint256 amountB,address to) external returns (uint256 share)"
]

export const BridgeSwap_ABI = parseAbi(temp_bridge_swap)