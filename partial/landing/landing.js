angular
  .module('realChat')
  .controller('LandingCtrl', ['$rootScope', '$scope', '$stateParams', 'Room', 'Message',
    function($rootScope, $scope, $stateParams, Room, Message){

    $rootScope.$on('$stateChangeSuccess', function() {
      $scope.activeMessages = Room.messages($stateParams.id);
      $scope.roomName = $stateParams.room;
    });

    console.log($stateParams.id);

    $scope.sendMessage = function sendMessage() {
      if ($scope.newMessage) {
        Message.send($scope.newMessage);
      }
    };

}]);
