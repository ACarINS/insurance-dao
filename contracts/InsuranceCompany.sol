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

	function InsuranceCompany() {
		owner = msg.sender;
	}

	function IssueContract(address driverAddress) payable returns(address) {
		address contractAddress = new DriverContract(driverAddress);
		contractAddress.transfer(msg.value*10);
		
		Issued(driverAddress);
		return contractAddress;
	}

	function addExpert(address expert) payable onlyOwner {
		IsExpert[expert] = true;
	}
}
