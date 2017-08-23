var orgsModule = angular.module('orgs');

orgsModule.component('addOrgComponent', {
    templateUrl: "modules/Orgs/AddOrg/AddOrg.html",
    controller: addOrgController
});

addOrgController.$inject = ['orgsService', '$state', 'InsuranceCompanyContract'];
function addOrgController(orgsService, state, InsuranceCompanyContract) {
    var AB = this;
    AB.service = orgsService;
    AB.addOrg = {};
    AB.expert = InsuranceCompanyContract.defaultExpertAddress;

    AB.addOrg = function () {
        AB.service.addOrg().then(function (res) {
            AB.transactionHash = res;
        });
    }

    AB.getContractAddress = function () {
        web3.eth.getTransactionReceipt(AB.transactionHash, function (error, result) {
            if (error) return;
            AB.deployedContract = result.contractAddress;
        });

    };

    AB.checkBallance = function(){
        web3.eth.getBalance(AB.deployedContract, function(error, result){
            if (error) return;
            AB.orgBalance = result;
        });
    };

    AB.addExpert = function () {
        AB.service.addExpert(AB.expert, AB.deployedContract).then(function (res) {
            console.log(res);
        });
    };

    AB.checkExpert = function () {
        AB.service.checkExpert(AB.expert, AB.deployedContract).then(function (res) {
            console.log(res);
        });
    }
};