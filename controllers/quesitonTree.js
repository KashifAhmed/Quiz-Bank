/**
 * Created by kashif on 3/30/14.
 */
angular.module('questionTree',[])
    .controller('showQuestion',function($scope){
        $scope.name = "Question Tree";

        $scope.my_data = [];
        // $scope.my_tree = tree = {};
        $scope.my_tree_handler = function(sel){
            $scope.output = "You are Selected : "+sel.description;
        }
    })