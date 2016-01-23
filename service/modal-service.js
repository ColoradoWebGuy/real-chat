angular
  .module('realChat')
  .factory('modalService', function($modal) {

    var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'service/modal-service.html'
    };

    var modalOptions = {
        actionButtonText: 'OK',
        headerText: 'Proceed?',
        smallText: 'Perform this action?'
    };

    return {
      showModal: function showModal(customModalDefaults, customModalOptions) {
        if (!customModalDefaults) customModalDefaults = {};
        customModalDefaults.backdrop = 'static';
        return this.show(customModalDefaults, customModalOptions);
      },
      show: function show(customModalDefaults, customModalOptions) {
          //Create temp objects to work with since we're in a singleton service
          var tempModalDefaults = {};
          var tempModalOptions = {};

          //Map angular-ui modal custom defaults to modal defaults defined in service
          angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

          //Map modal.html $scope custom properties to defaults defined in service
          angular.extend(tempModalOptions, modalOptions, customModalOptions);

          if (!tempModalDefaults.controller) {
              tempModalDefaults.controller = function ($scope, $modalInstance) {
                  $scope.modalOptions = tempModalOptions;
                  $scope.modalOptions.ok = function (result) {
                      $modalInstance.close(result);
                  };
                  $scope.modalOptions.close = function (result) {
                      $modalInstance.dismiss('cancel');
                  };
              }
          }

          return $modal.open(tempModalDefaults).result;
      },
      get: function get() {
        return rooms;
      }
    };
});

angular
  .module('realChat')
  .controller('ModalInstanceCtrl', function ModalInstanceCtrl($scope, $modalInstance) {

  console.log('It\'s coming: '+newUsername.name);
  $scope.newUsername = {};

  $scope.add = function () {
    $modalInstance.close($scope.newUsername.name);
  };
});
