/**
 * Created by kashif on 3/31/14.
 */
angular.module('createQuiz',[])
    .controller('createQuizCtrl',function($scope){
        $scope.items = [] ;
        $scope.bestAns = function(){
            $scope.items.push(
                {
                    name:"BEST ANSWER"
                }
            );
            console.log($scope.items)
        }
        $scope.multAns = function(){
            $scope.items.push(
                {
                    name:"MULT ANSWER"
                }
            );
        }
        $scope.matchAns = function(){
            $scope.items.push(
                {
                    name:"MATCH ANSWER"
                }
            );
        }
        $scope.trueFalse = function(){
            $scope.items.push(
                {
                    name:"TRUE FALSE"
                }
            );
        }

    })