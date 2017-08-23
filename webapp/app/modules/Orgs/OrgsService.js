var orgsModule = angular.module('orgs');

orgsModule.factory('orgsService', orgService);

orgService.$inject = ['InsuranceCompanyContract', '$q'];
function orgService(InsuranceCompanyContract, $q) {

    var storage = {
        data: undefined
    };

    return {
        addOrg: function () {
            const deffered = $q.defer();
            var insuranceContract = web3.eth.contract(InsuranceCompanyContract.abi);

            var contractInstance = insuranceContract.new({ from: web3.eth.coinbase,  gas: 1200000 },
                function (e, contract) {
                    if(e) return;
                    console.log(contract);        
                    storage.data = contract.transactionHash;
                    deffered.resolve(contract.transactionHash);
                });
            return deffered.promise;
        },

        issueContract: function (deployedContract, sum) {
            const deffered = $q.defer();
            var insuranceContract = web3.eth.contract(InsuranceCompanyContract.abi);
            var contractInstance = insuranceContract.at(deployedContract);

           contractInstance.IssueContract.call(
               { from: web3.eth.coinbase,  gas: 1200000, value: web3.toWei(sum, 'ether')},
                function (err, address) {
                    if(err) return;
                    console.log(address);        
                    deffered.resolve(address);
                });
            return deffered.promise;
        },
        
        addExpert: function(expertAddr, deployedContract) {
            const deffered = $q.defer();

            var insuranceContract = web3.eth.contract(InsuranceCompanyContract.abi);
            var contractInstance = insuranceContract.at(deployedContract);
            var expert = web3.toHex(expertAddr);
            contractInstance.addExpert(expert,  function (e, result) {
                    if(e) return;
                    console.log(result);
                });
            
            return deffered.promise;
        },

        executePayout: function(driverContractAddress, payoutAmount){
            const deffered = $q.defer();
                    
            var insuranceContract = web3.eth.contract(InsuranceCompanyContract.driverAbi);
            var contractInstance = insuranceContract.at(driverContractAddress);

            contractInstance.Payout(payoutAmount,  function (e, result) {
                    if(e) return;
                    console.log(result);
                    deffered.resolve(result);
                });

            return deffered.promise;
        },

        checkExpert: function(expert, deployedContract) {
            const deffered = $q.defer();

            var insuranceContract = web3.eth.contract(InsuranceCompanyContract.abi);
            var contractInstance = insuranceContract.at(deployedContract);
            contractInstance.IsExpert(expert,  function (e, result) {
                    if(e) return;
                    deffered.resolve(result);
                });
            
            return deffered.promise;
        },

        getStorage: function () {
            return storage.data;
        }
    };
};