Meteor.startup(function() {
  navigator.geolocation.getCurrentPosition(success);
});

// success = function(position) {
//   Session.set('location', position);
//   debugger
//   Meteor.call('fetchNearbyLocations', position.coords)
// }

success = function(position) {
    Session.set('location', {
        'coords': {
            'accuracy': position.coords.accuracy,
            'latitude': position.coords.latitude,
            'longitude': position.coords.longitude
        },
        'timestamp': position.timestamp
    });
}
