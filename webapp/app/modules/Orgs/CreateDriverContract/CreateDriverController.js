var orgsModule = angular.module('orgs');

orgsModule.controller('CreatDriverController', CreatDriverController);

CreatDriverController.$inject = ['orgsService', '$state', 'InsuranceCompanyContract'];
function CreatDriverController(orgsService, state, InsuranceCompanyContract) {
    var AB = this;
    AB.service = orgsService;   
    AB.insurancePrice = 0; 
    AB.orgAddress = InsuranceCompanyContract.InsuranceDaoAddress;
    AB.IssueContract = function () {
        AB.service.issueContract(AB.orgAddress, AB.insurancePrice).then(function (res) {
            AB.driverContractAddress = res;
        });
    };

    AB.countPrice = function(){
        //Emmiting calculations
        AB.insurancePrice = Math.floor(Math.random() * (4 - 1)) + 1;
    };
};