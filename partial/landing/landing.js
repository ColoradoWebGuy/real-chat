angular
  .module('realChat')
  .controller('LandingCtrl', ['$rootScope', '$scope', '$stateParams', 'Room', 'Message',
    function($rootScope, $scope, $stateParams, Room, Message){

    //$scope.activeRoom = '-K8GklPoB7f9mNWCO7DJ';
    // $scope.activeRoom = ''; // initial room id~
    //
    // $scope.updateMessages = function updateMessages(id) {
    //   $scope.activeMessages = Room.messages(id);
    // }
    // $scope.updateMessages($scope.activeRoom);

    $rootScope.$on('$stateChangeSuccess', function() {
      $scope.activeMessages = Room.messages($stateParams.id);
      $scope.roomName = $stateParams.room;
    });

    console.log($stateParams.id);

    $scope.sendMessage = function sendMessage() {
      if ($scope.newMessage) {
        Message.send($scope.newMessage);
      }
    }

}]);
