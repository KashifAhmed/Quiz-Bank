/**
 * Created by kashif on 3/31/14.
 */
angular.module('createQuiz',['bestAns'])
    .controller('createQuizCtrl',function($scope,best_ans_bank){
        $scope.createForm = "hideBestAnsDiv"
        $scope.questions = [];
        $scope.options = [];
        $scope.options.length = 2;

        $scope.best_ans = function(){
            $scope.createForm = "";
            $scope.title = "Best Answer";
            $scope.opts = [];
            $scope.opts.length = 2;
            $scope.addOpt_b_a = function($scope){
                
            }

        }



        //Submit the best answer
        /*$scope.submit_best_ans = function(){
            //Check if empty then leave
            if(($scope.b_a_ques!=null)&&($scope.b_a_opt1!=null)&&($scope.b_a_opt2!=null)&&($scope.b_a_opt3!=null)&&($scope.b_a_opt4!=null)){
                $scope.quizObj = {
                    label: $scope.b_a_ques,
                    opts : $scope.options
                }
                //Push to factory
                best_ans_bank[0].children.push($scope.quizObj);
                //Push to array for current create
                $scope.questions.push($scope.quizObj);

                    $scope.b_a_ques = null;
                    $scope.b_a_opt1 = null;
                    $scope.b_a_opt2 = null;
                    $scope.b_a_opt3 = null;
                    $scope.b_a_opt4 = null;
            }

        }*/

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