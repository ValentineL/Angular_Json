var myapp = angular.module('mainApp', ['duScroll']);
myapp.controller('mainController',function($scope,$http,$document){
    
    $http.get('../epl_clubs.json')
        .success(function(data) {
            $scope.teams=data;
        })
        .error(function(data,status,error,config){
            $scope.teams = [{heading:"Error",description:"Could not load json   data"}];
        });

    $scope.setTeam = function(team) {
        $scope.team_image = team.crest;
        $scope.position = team.position;
        $scope.last_5_fixtures = team.last_5_fixtures;
        $scope.next_fixture = team.next_fixture;
        
        $document.scrollTopAnimated(0, 1000).then(function() {
            console && console.log('You just scrolled to the top!');
        });
    }
});