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
        customModalDefaults = customModalDefaults || {};
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
                  $scope.newUsername = {};

                  $scope.modalOptions.ok = function ok() {
                    console.log('Temp Defaults: '+ $scope.newUsername.name)
                      $modalInstance.close($scope.newUsername.name);
                  };
              }
          }

          return $modal.open(tempModalDefaults).result;
      }
    };
});
