pragma solidity ^0.4.4;
import "./InsuranceCompany.sol";


contract DriverContract {
    address driverAddress;
    InsuranceCompany insurenceCompany;
    uint lastExtent;

	modifier onlyExpert() {
        bool expert = insurenceCompany.IsExpert(msg.sender);
    	if (!expert) throw;
   		_;
	}

    modifier forActive() {
    	if (now - lastExtent > 1 years) throw;
   		 _;
	}

    modifier forNonActive() {
    	if (now - lastExtent < 1 years) throw;
   		 _;
	}

    function DriverContract(address _driverAddress){
        lastExtent = now;
        driverAddress = _driverAddress;
        insurenceCompany = InsuranceCompany(msg.sender);
    }

    function Payout(uint256 payoutAmount) forActive onlyExpert{
        driverAddress.transfer(payoutAmount);
    }

    function MoneyBack() forNonActive{
        insurenceCompany.transfer(this.balance);
    }
}