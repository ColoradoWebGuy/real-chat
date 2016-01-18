angular
  .module('realChat')
  .controller('RoomPickerCtrl', ['$scope', 'Room',
    function($scope, Room) {

      $scope.rooms = Room.all;

  }
]);
