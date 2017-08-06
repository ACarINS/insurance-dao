(function () {
    mainModule = angular.module('InsuranceStore');

    mainModule.$inject = ['$stateProvider', '$urlRouterProvider'];
    mainModule.config(appConfig);

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index.html");

        var states =
            [{
                name: 'AddOrg',
                url: '/orgs/Add',
                component: 'addOrgComponent'
            },
            {
                name: 'AddExpert',
                url: '/orgs/{expertAddress}',
                component: 'addOrgComponent'
            }];
        _.each(states, function (state) {
            $stateProvider.state(state);
        });
    }
} ());