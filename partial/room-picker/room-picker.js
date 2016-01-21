angular
  .module('realChat')
  .controller('RoomPickerCtrl', ['$scope', 'Room',
    function($scope, Room) {

      $scope.rooms = Room.get();

      // $scope.setNewRoom = function setNewRoom(id) {
      //   $scope.$parent.activeRoom = id;
      //   $scope.$parent.updateMessages(id);
      // }
  }
]);
