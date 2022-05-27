import { Contract } from 'ethers'
import { addresses, abis } from './constants'
import { ethers } from 'ethers';

export const createSign = async ({ value, token, provider, signer }) => {
  const { chainId } = await provider.getNetwork()
  const signatureFundContract = new Contract(
      addresses(chainId).signatureFund,
      abis.signatureFund,
      signer)
  return signatureFundContract.createSign(
    token, { value:  ethers.utils.parseEther(value) }
  );
}

export const mintSelected = async (url, provider, signer) => {
  const { chainId } = await provider.getNetwork()
  const signatureNFTContract = new Contract(
    addresses(chainId).signatureNFT,
    abis.signatureNFT,
    signer)
  return signatureNFTContract.mintSelected(url)
}

export const nextTokenId = async(provider) => {
  const {chainId} = await provider.getNetwork();
  const signatureNFTContract = new Contract(
    addresses(chainId).signatureNFT,
    abis.signatureNFT,
    provider)
  return signatureNFTContract.tokenIdCounter()
}