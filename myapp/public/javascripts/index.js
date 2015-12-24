angular.module('myApp',[])
.controller('BugListController',function(){
   var bugList = this;
   bugList.list= [];
   bugList.load = function(){
       bugList.list.push({id:1,title:'test',href:''});

   }
});
