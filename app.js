angular.module('realChat', [
    'ui.bootstrap',
    'ui.utils',
    'ui.router',
    'ngAnimate',
    'firebase',
    'ngCookies'
  ])
  .run(['$cookies', 'modalService', '$controller', '$rootScope', '$modal',
  function($cookies, modalService, $controller, $rootScope, $modal) {

    if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {
        // Do something to allow users to set their username
        var modalOptions = {
            actionButtonText: 'Submit',
            headerText: 'Set your username',
            smallText: 'This name will appear when you send messages.',
            textInput: true,
            textRequired: true
        };

        var modalDefaults = {};

        modalService.showModal(modalDefaults, modalOptions).then(
          function (result) {
              $cookies.blocChatCurrentUser = result;
              console.log("made it into showModal:"+result);
          }
        );

      }

  }]);

angular.module('realChat').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('landing', {
        url: '/',
        templateUrl: 'partial/landing/landing.html'
    });

    $stateProvider.state('landing.room', {
        url: 'room/:id/:room',
        templateUrl: 'partial/landing/landing.html'
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');
});

angular.module('realChat').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
