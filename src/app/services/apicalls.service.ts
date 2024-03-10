import { Injectable } from '@angular/core';
import Web3 from 'web3';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  private web3: Web3;
  private balanceOfABI = [
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  private tokenContract = '0xdac17f958d2ee523a2206206994597c13d831ec7';
  private contract: any;

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/332bbf95fbec49bc9587c61c97c541ac'));
    this.contract = new this.web3.eth.Contract(this.balanceOfABI, this.tokenContract);
  }
  async getTokenBalance(tokenholder : string): Promise<string> {
    const result = await this.contract.methods.balanceOf(tokenholder).call();
    const balance = parseFloat(result) / 1e6; 
    const formattedResult = balance.toFixed(6); 
    return formattedResult;
  }
  async getLastBlock(): Promise<string> {
    const result = await this.web3.eth.getBlock();
    return result.number.toString();
  }



}
