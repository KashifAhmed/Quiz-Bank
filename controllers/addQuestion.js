/**
 * Created by kashif on 3/30/14.
 */
angular.module("addQuestion",[])
    .controller("getQuestion",function($scope){
        $scope.addQuestion = function(){
            $scope.obj = {
                label:$scope.question,
                opt:[
                    $scope.opt1,
                    $scope.opt2,
                    $scope.opt3,
                    $scope.opt4
                ],
                correct:$scope.correct
            }
            $scope.my_data.push($scope.obj);
            $scope.question = "";
            console.log($scope.my_data);
        }
    })