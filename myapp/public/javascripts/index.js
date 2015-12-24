angular.module('myApp',[])
.controller('BugListController',['$http',function($http){
   var bugList = this;
   bugList.list= [];
   bugList.load = function(){
	$http.get('/zendao/bug/list').then(function(res){
		for(i=0;i<res.data.length;i++){
			bug=res.data[i];
			bugList.list.push(bug);
		}
	});
   }
}]);
