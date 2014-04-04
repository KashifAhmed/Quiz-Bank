/**
 * Created by kashif on 3/31/14.
 */
angular.module('createQuiz',['bestAns'])
    .controller('createQuizCtrl',function($scope,best_ans_bank){
        $scope.hideBestAnsDiv = "hideBestAnsDiv"

        $scope.submit_best_ans = function(){
            if(($scope.b_a_ques!=null)&&($scope.b_a_opt1!=null)&&($scope.b_a_opt2!=null)&&($scope.b_a_opt3!=null)&&($scope.b_a_opt4!=null)){
                $scope.quizObj = {
                    label:$scope.b_a_ques,
                    opt1:$scope.b_a_opt1,
                    opt2:$scope.b_a_opt2,
                    opt3:$scope.b_a_opt3,
                    opt4:$scope.b_a_opt4
                }
                best_ans_bank[0].children.push($scope.quizObj);
            }
            console.log(best_ans_bank);

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