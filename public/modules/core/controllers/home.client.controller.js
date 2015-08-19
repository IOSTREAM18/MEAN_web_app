'use strict';
angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.alerts = [
            {
                icon:'glyphicon-user',
                colour:'btn-info',
                name:'Linkedin',
                description:'Profile of Dalin Huang',
                links:'http://ca.linkedin.com/in/dalinhuang'
            },
            {
                icon:'glyphicon-inbox',
                colour:'btn-primary',
                name:'Dropbox',
                description:'Check out my project and code',
                links:'https://www.dropbox.com/sh/ysv8684jlmzjbqf/AAAEz05aoz8a79AbvpJ5q7-Qa?dl=0'
            },
            {
                icon:'glyphicon-cloud-upload',
                colour:'btn-success',
                name:'GitHub',
                description:'Build software better, together.',
                links:'https://github.com/hdl881127'
            },
            {
                icon:'glyphicon-cloud',
                colour:'btn-warning',
                name:'Web App',
                description:'Web App (old version) by Dalin Huang',
                links:'https://hidden-sands-2397.herokuapp.com'
            },
            {
                icon:'glyphicon-thumbs-up',
                colour:'btn-info',
                name:'Facebook',
                description:'Not active in facebook lol...',
                links:'https://www.facebook.com/dalin.huang.39'
            },
            {
                icon:'glyphicon-search',
                colour:'btn-danger',
                name:'Google',
                description:'My Home Page',
                links:'https://www.google.ca/'
            }
        ];
	}
]);
