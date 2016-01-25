angular
  .module('realChat')
  .controller('ModalCtrl',
  function ModalCtrl($scope, $modal, $log, Room) {

  $scope.animationsEnabled = true;

  $scope.open = function open() {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg'
    });

    modalInstance.result.then(function add(roomName) {
      if (roomName) {
        Room.add(roomName);
        $log.info('Room added: '+ roomName);
      }
    }, function cancel() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

angular
  .module('realChat')
  .controller('ModalInstanceCtrl', function ModalInstanceCtrl($scope, $modalInstance) {

  $scope.newRoom = {};

  $scope.add = function () {
    $modalInstance.close($scope.newRoom.name);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
