var orgsModule = angular.module('orgs');

orgsModule.factory('orgsService', orgService);

function orgService(rest) {

    var storage = {
    };

    return {
        addOrg: function () {
            console.log("zigazaga");
            // METAMASK WEB3 LOGIC WILL BE HERE
        },
        getStorage: function () {
            return storage;
        }
    };
};