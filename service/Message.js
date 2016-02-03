/*global Firebase */
angular
  .module('realChat')
  .factory('Message', ['$firebaseArray', '$stateParams', '$cookies',
    function($firebaseArray, $stateParams, $cookies) {

    var firebaseRef = new Firebase('https://radiant-heat-2803.firebaseio.com');
    var messages = $firebaseArray(firebaseRef.child('messages'));

    return {
      send: function(newMessage) {
        var today = moment().format();

        // Send method logic
        console.log("Message: " + newMessage);
        console.log("Date: " + today);
        console.log("RoomID: " + $stateParams.id);
        console.log("Username: " + $cookies.blocChatCurrentUser);

        firebaseRef.child("messages").push({
          content: newMessage,
          roomId: $stateParams.id,
          sentAt: today,
          username: $cookies.blocChatCurrentUser
        });
      }
    };
}]);
