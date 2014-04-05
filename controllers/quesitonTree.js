/**
 * Created by kashif on 3/30/14.
 */
angular.module('questionTree',['bestAns'])
    .controller('showQuestion',function($scope,best_ans_bank){
        $scope.name = "Question Tree";
        $scope.my_data = best_ans_bank;
        // $scope.my_tree = tree = {};
        $scope.my_tree_handler = function(sel){

            $scope.output = "You are Selecting : "+sel.label;

        }
    })