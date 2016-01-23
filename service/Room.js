angular
	  .module('realChat')
		.factory('Room', ['$firebaseArray', function Room($firebaseArray) {
	 		var firebaseRef = new Firebase('https://radiant-heat-2803.firebaseio.com');
			var rooms = $firebaseArray(firebaseRef.child('rooms'));

		  return {
				add: function add(room_name) {
						if (room_name) {
							rooms.$add({ name: room_name }).then(function(ref) {
								var id = ref.key();
								console.log("added record with id " + id);
								rooms.$indexFor(id); // returns location in the array
							});
						}
				},
				get: function get() {
					return rooms;
				},
        messages: function messages(roomId) {
          var roomMessages = $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId));
          return roomMessages;
        }
			};
}]);
