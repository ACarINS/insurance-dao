var orgsModule = angular.module('orgs');

orgsModule.controller('ExpertController', ExpertController);

ExpertController.$inject = ['orgsService', '$state', 'InsuranceCompanyContract'];
function ExpertController(orgsService, state, InsuranceCompanyContract) {
    var AB = this;
    AB.service = orgsService;   
    AB.payoutAmount = 0; 
    AB.driverContractAddress = InsuranceCompanyContract.defaultDriverContractAddress;
    AB.resultMessage;

    AB.executePayout = function () {
        AB.service.executePayout(AB.driverContractAddress, AB.payoutAmount).then(function (res) {
            AB.resultMessage = "Payout was done at " + res;
        });
    };
};