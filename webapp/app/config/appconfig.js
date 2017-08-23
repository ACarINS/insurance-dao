(function () {
    mainModule = angular.module('InsuranceStore');

    mainModule.$inject = ['$stateProvider', '$urlRouterProvider'];
    mainModule.config(appConfig);

    mainModule.constant('InsuranceCompanyContract', {
        abi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "expert",
                        "type": "address"
                    }
                ],
                "name": "addExpert",
                "outputs": [],
                "payable": true,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "IssueContract",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": true,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "IsExpert",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "inputs": [],
                "payable": true,
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "driverAddress",
                        "type": "address"
                    }
                ],
                "name": "Issued",
                "type": "event"
            }
        ],
        driverAbi: [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "payoutAmount",
                        "type": "uint256"
                    }
                ],
                "name": "Payout",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "MoneyBack",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_driverAddress",
                        "type": "address"
                    }
                ],
                "payable": false,
                "type": "constructor"
            }
        ],
        unlinked_binary: "0x60606040525b60018054600160a060020a03191633600160a060020a03161790555b5b6103d6806100316000396000f300606060405263ffffffff60e060020a6000350416634fcaee778114610037578063aa6b98281461004d578063b80301d114610071575bfe5b61004b600160a060020a03600435166100a1565b005b6100556100e5565b60408051600160a060020a039092168252519081900360200190f35b341561007957fe5b61008d600160a060020a036004351661018c565b604080519115158252519081900360200190f35b60015433600160a060020a039081169116146100bd5760006000fd5b600160a060020a0381166000908152602081905260409020805460ff191660011790555b5b50565b60006000336100f26101a1565b600160a060020a03909116815260405190819003602001906000f080151561011657fe5b604051909150600160a060020a03821690600a340280156108fc02916000818181858888f19350505050151561014857fe5b60408051600160a060020a033316815290517fa566fc6a716182a1dc2bc8d30c98b4278f1d386554dcbbd6a0c39aaedad08c289181900360200190a18091505b5090565b60006020819052908152604090205460ff1681565b6040516101f9806101b28339019056006060604052341561000c57fe5b6040516020806101f983398101604052515b4260025560008054600160a060020a03808416600160a060020a0319928316179092556001805433909316929091169190911790555b505b610194806100656000396000f300606060405263ffffffff60e060020a60003504166322427047811461002c57806371eb783814610041575bfe5b341561003457fe5b61003f600435610053565b005b341561004957fe5b61003f61011c565b005b6301e13380600254420311156100695760006000fd5b6001546040805160006020918201819052825160e060020a63b80301d1028152600160a060020a03338116600483015293519194939093169263b80301d192602480830193919282900301818787803b15156100c157fe5b6102c65a03f115156100cf57fe5b5050604051519150508015156100e55760006000fd5b60008054604051600160a060020a039091169184156108fc02918591818181858888f19350505050151561011557fe5b5b5b505b50565b6301e13380600254420310156101325760006000fd5b600154604051600160a060020a039182169130163180156108fc02916000818181858888f19350505050151561016457fe5b5b5b5600a165627a7a7230582043f68c103bbe3442052bec86d194c4b48dfba81079fd618ade4d2f435547d7f90029a165627a7a723058209cc3561c6b3197a72f27edcbcefcf761620cc16eaa6ac4ac8b534c7d320c05760029",
        InsuranceDaoAddress: "0xfb7d1d23ea5dc772a2038aaf8a5d991a2dd079d2",
        defaultExpertAddress: "0x1b63e8d9e6319ac06cca30bb196c17c6bdfe3ea3",
        defaultDriverContractAddress: "0x1b63e8d9e6319ac06cca30bb196c17c6bdfe3ea3"
    });

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index.html");

        var states =
            [{
                name: 'AddOrg',
                url: '/orgs/Add',
                component: 'addOrgComponent'
            },
            {
                name: 'CreateDriverContract',
                url: '/orgs/CreateContract',
                controller: 'CreatDriverController',
                templateUrl: 'modules/Orgs/CreateDriverContract/CreateDriver.html'
            },
            {
                name: 'Expert',
                url: '/orgs/Expert',
                controller: 'ExpertController',
                templateUrl: 'modules/Orgs/Expert/Expert.html'
            }];
        _.each(states, function (state) {
            $stateProvider.state(state);
        });
    }
}());