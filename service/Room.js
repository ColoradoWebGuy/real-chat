angular
		.module('realChat')
		.factory('Room', ['$firebaseArray', function($firebaseArray) {

			var firebaseRef = new Firebase('https://radiant-heat-2803.firebaseio.com');

			var rooms = $firebaseArray(firebaseRef.child('rooms'));

		  return {
		    all: rooms
		  }
}]);
