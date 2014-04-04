/**
 * Created by Fab-Dev on 4/3/14.
 */
angular.module('bestAns',[])
    .factory('best_ans_bank',function(){
        var quizArr = [
            {
                label:"Best Answer",
                children:[]
            },
            {
                label:"Multiple Choise",
                children:[]
            },
            {
                label:"True/False",
                children:[]
            },
            {
                label:"Matching",
                children:[]
            }
        ];

        return quizArr;
    });