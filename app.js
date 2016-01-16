angular.module('realChat', ['ui.bootstrap','ui.utils','ui.router','firebase']);

angular.module('realChat').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $stateProvider.state('landing', {
        url: '/',
        templateUrl: 'partial/landing/landing.html'
    });

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
