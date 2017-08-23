pragma solidity ^0.4.4;
import "./DriverContract.sol";

contract InsuranceCompany {
	mapping (address => bool) public IsExpert;
	address owner;

	event Issued(address driverAddress);

	modifier onlyOwner() {
    	if (msg.sender != owner) throw;
   		_;
	}

	function InsuranceCompany() payable {
		owner = msg.sender;
	}

	function IssueContract() payable returns(address) {
		address contractAddress = new DriverContract(msg.sender);
		contractAddress.transfer(msg.value*10);
		
		Issued(msg.sender);
		return contractAddress;
	}

	function addExpert(address expert) payable onlyOwner {
		IsExpert[expert] = true;
	}
}
