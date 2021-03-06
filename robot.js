

var sphero = require("sphero"),
    bb8 = sphero("7c6dbda72e3c4096be4031ad9d63380c"); // change BLE address accordingly

bb8.connect(function() {
  // roll BB-8 in a random direction, changing direction every second
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    bb8.roll(250, direction);
    bb8.color("blue");

  // have Sphero tell you when it detect collisions
  bb8.detectCollisions();

  // when Sphero detects a collision, turn red for a second, then back to green
  bb8.on("collision", function(data) {
    console.log("collision detected");
    console.log("  data:", data);

    bb8.color("red");

    setTimeout(function() {
      bb8.color("green");
    }, 5000);
  });
  }, 1000);


});

