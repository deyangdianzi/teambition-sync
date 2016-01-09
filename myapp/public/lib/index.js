export function buglistcontrollerinit(app) {
app.controller('BugListController', ['$http','$scope',function($http, $scope) {
   const bugList = this;
   bugList.list = [];
   bugList.load = function() {
	$http.get('/zendao/bug/list').then(res => {
		for(let i=0;i<res.data.length;i++){
			var bug = res.data[i];
			bugList.list.push(bug);
		}
	});
   }
   bugList.login = function() {
   	$http.post('/login',{username:$scope.username,password:$scope.password}).then(response => {
		if(response.status==200){
			$scope.user = $scope.username;
		}else{
			$scope.user = false;
		}
	});
    }
	bugList.logout = function() {
		$http.post('/logout').then(response => {
			if(response.status=200)$scope.user = false;
		});
	};
}]);
};
