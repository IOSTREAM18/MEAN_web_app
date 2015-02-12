'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.alerts = [
            {  //1
                icon: 'glyphicon-user',
                colour:'btn-success',
                total:'20,408',
                description:'TOTAL CUSTOMERS'
            },
            {  //2
                icon: 'glyphicon-calendar',
                colour:'btn-primary',
                total:'8,382',
                description:'UPCOMING EVENTS'
            },
            {  //3
                icon: 'glyphicon-edit',
                colour:'btn-success',
                total:'527',
                description:'NEW CUSTOMERS IN 24H'
            },
            { //4
                icon: 'glyphicon-record',
                colour:'btn-info',
                total:'85,000',
                description:'EMAILS SENT'
            },
            { //5
                icon: 'glyphicon-eye-open',
                colour:'btn-warning',
                total:'268',
                description:'FOLLOW UPS REQUIRED'
            },
            { //6
                icon: 'glyphicon-flag',
                colour:'btn-danger',
                total:'348',
                description:'REFERRALS TO MODERATE'
            }
        ];

	}
]);
