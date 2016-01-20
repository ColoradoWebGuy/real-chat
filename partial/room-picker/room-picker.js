angular
  .module('realChat')
  .controller('RoomPickerCtrl', ['$scope', 'Room',
    function($scope, Room) {

      $scope.rooms = Room.get();

      $scope.setRoomID = function setRoomID(roomID) {
        // assign new room Id
        $scope.$parent.activeRoom = roomID;
        // update messages
        $scope.$parent.setRoomMessages(roomID);
      }
  }
]);
