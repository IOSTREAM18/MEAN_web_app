'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.alerts = [
            {  //1
                icon: 'glyphicon-user',
                colour:'btn-success',
                total:'17,839',
                description:'TOTAL CUSTOMERS'
            },
            {  //2
                icon: 'glyphicon-calendar',
                colour:'btn-primary',
                total:'1,382',
                description:'UPCOMING EVENTS'
            },
            {  //3
                icon: 'glyphicon-edit',
                colour:'btn-success',
                total:'387',
                description:'NEW CUSTOMERS IN 24H'
            },
            { //4
                icon: 'glyphicon-record',
                colour:'btn-info',
                total:'78,300',
                description:'EMAILS SENT'
            },
            { //5
                icon: 'glyphicon-eye-open',
                colour:'btn-warning',
                total:'2,268',
                description:'CURRENT CUSTOMERS ONLINE'
            },
            { //6
                icon: 'glyphicon-flag',
                colour:'btn-danger',
                total:'1,548',
                description:'LOCATION SHARED'
            }
        ];

	}
]);
