/**
 * Created by kashif on 3/29/14.
 */
var depInj = [
    'ngRoute',
    'angularBootstrapNavTree',
    'ngAnimate',
    'questionTree',
    'addQuestion',
    'createQuiz'
];
angular.module('quizBank',depInj)
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'partials/main.html'

            })
            .when('/createQuiz',{
                templateUrl:'partials/createQuiz.html',
                controller:'createQuizCtrl'
            })
            .when('/questionTree',{
                templateUrl:'partials/questionTree.html',
                controller:"showQuestion"
            })
            .when('/addQuestion',{
                templateUrl:'partials/addQuestion.html',
                controller:"getQuestion"
            });
    }]);
