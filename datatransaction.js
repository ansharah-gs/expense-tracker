//var Tx     = require('ethereumjs-tx')
//const Web3 = require('web3')
//const web3 = new Web3('https://ropsten.infura.io/v3/a87553c2f2424f36a6d10c3946216710');

//const account1 = '0x533728F6ef2B6772FEDF3E7F3b7A6f258bDc8aF5' // Your account address 1
const privateKey1= "1eab57ef6425db3f95487e29c307be96a6744891ef6cfb36c9958f2a4817e87e";

const account2="0x80a0fbC69140dB5C05d69b3829a892Fe8eB0f496";

const contract_address="0x417Bf7C9dc415FEEb693B6FE313d1186C692600F";//contract address i.e deployed contract on ropsten
const abi=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_amount",
				"type": "int256"
			}
		],
		"name": "addTransaction",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "NewRequest",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getExpenseDetails",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "ViewStruct",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const privatekey1buffer=Buffer.from(privateKey1, 'hex') //buffer created i.e buffer is binary array
var contract=new web3.eth.Contract(abi,contract_address);
web3.eth.getTransactionCount(account1, (err, txCount) => {//transaction initiation
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),    
    //value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(80000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to:    contract_address,
    data:contract.methods.addTransaction(contract_address,text,amount).encodeABI(),//this encode will convert json to byte code
  };
  console.log(data);

  // Sign the transaction
  const tx = new Tx.Transaction(txObject,{//transaction object
    chain:'ropsten',
  });
  tx.sign(privatekey1buffer);

  const serializedTx = tx.serialize();//serialize transaction
  const raw = '0x' + serializedTx.toString("hex");
  console.log('this is txObject:', txObject);
  // Broadcast/ sign  the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  });
})