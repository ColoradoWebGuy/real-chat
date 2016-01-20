angular
  .module('realChat')
  .controller('LandingCtrl',['$scope', 'Room',
    function($scope, Room){

      $scope.activeRoom = ''; // initial roomID

      $scope.setRoomMessages = function setRoomMessages(roomID) {
        console.log("Messages Set: "+ roomID)
        $scope.activeMessages = Room.messages(roomID);
      }

      // set room messages
      $scope.setRoomMessages($scope.activeRoom);
}]);
