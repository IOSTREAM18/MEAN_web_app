'use strict';

var app = angular.module('core', []);
app.controller('HomeController', function($scope, Authentication){
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
                links:''
                /* links:'https://hidden-sands-2397.herokuapp.com'*/
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

});

app.directive('rippleEffect', function($interval){
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.bind('click', function($event){
                $scope.pageX = $event.pageX;
                $scope.pageY = $event.pageY;

                $scope.elementX = element[0].offsetLeft;
                $scope.elementY = element[0].offsetTop;

                $scope.centerForSvgX = $scope.pageX - $scope.elementX;

                $scope.centerForSvgY = $scope.pageY - $scope.elementY;

                console.log($scope.centerForSvgX);
                console.log($scope.centerForSvgY);

                $scope.box = element;
                $scope.box.find('svg').remove();

                element.append('<svg><circle cx="' + $scope.centerForSvgX + '" cy="' + $scope.centerForSvgY + '" r="' + 0 + '"></circle></svg>');

                $scope.circle = element.find('circle').eq(0);
                $scope.currentIteration = 0;
                $scope.startValue = 0;
                $scope.changeInValue = 800;
                $scope.totalIterations = 120;

                $scope.changeInValueOpacity = 0.5;
                $interval.cancel( $scope.stopPromise );
                $scope.stopPromise = $interval(function(){$scope.move();}, 8);

                event.preventDefault();
            });

            $scope.move = function(){
                $scope.circle.attr('r', $scope.easeInOutQuad($scope.currentIteration, $scope.startValue, $scope.changeInValue, $scope.totalIterations));
                $scope.circle.css('opacity', 0.5-$scope.easeInOutQuad($scope.currentIteration++, $scope.startValue, $scope.changeInValueOpacity, $scope.totalIterations));

                if($scope.currentIteration >=120){
                    $interval.cancel($scope.stopPromise);
                    //$scope.box.find('svg')[0].remove();
                }
            };

            $scope.easeInOutQuad = function(currentIteration, startValue, changeInValue, totalIterations) {
                if ((currentIteration /= totalIterations / 2) < 1) {
                    return changeInValue / 2 * currentIteration * currentIteration + startValue;
                }
                return -changeInValue / 2 * ((--currentIteration) * (currentIteration - 2) - 1) + startValue;
            };
        }
    };
});
