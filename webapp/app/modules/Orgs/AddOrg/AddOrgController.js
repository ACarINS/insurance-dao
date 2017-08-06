var orgsModule = angular.module('orgs');

usersModule.component('addOrgComponent', {
    templateUrl: "modules/Orgs/AddOrg/AddOrg.html",
    controller: addOrgController
});

addOrgController.$inject = ['orgsService', '$state'];
function addOrgController(orgsService, state) {
    var AB = this;
    AB.service = orgsService;
    AB.addOrg = {};

    AB.addOrg = function () {
        AB.service.addOrg();
    }
};