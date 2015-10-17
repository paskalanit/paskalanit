var app = angular.module("App", ["firebase"]);
app.controller("Ctrl", function($scope, $firebaseArray) {
	var ref = new Firebase("https://bestdb.firebaseio/id");
	
	$scope.viestit = $firebaseArray(ref);
	
	$scope.lisaaViesti = function() {
		
		var counter = 0;
		for (i = 0; i < $scope.viestit.length; i++) {
			counter++;
		};
		
		$scope.koulutukset.$add(
				{ 'Id':counter, 'Title': $scope.Title, 'Content':$scope.Content});
		
	};
	
});