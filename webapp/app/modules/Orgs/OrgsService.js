var orgsModule = angular.module('orgs');

orgsModule.factory('orgsService', orgService);

orgService.$inject = ['InsuranceCompanyContract'];
function orgService(InsuranceCompanyContract) {

    var storage = {
    };

    return {
        addOrg: function () {
            console.log(InsuranceCompanyContract);
            var MyContract = web3.eth.contract(InsuranceCompanyContract.abi);

            var contractInstance = MyContract.new({ from: web3.eth.coinbase, gas: 1000000 },
                function (e, contract) {
                    console.log(e, contract);
                    if (typeof contract.address !== 'undefined') {
                        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                    }
                });
            // METAMASK WEB3 LOGIC WILL BE HERE
        },
        getStorage: function () {
            return storage;
        }
    };
};