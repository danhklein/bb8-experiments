

var sphero = require("sphero"),
    bb8 = sphero("7c6dbda72e3c4096be4031ad9d63380c"); // change BLE address accordingly

bb8.connect(function() {
  // roll BB-8 in a random direction, changing direction every second
  setInterval(function() {


    bb8.color("blue");

  // have Sphero tell you when it detect collisions


  // when Sphero detects a collision, turn red for a second, then back to green
    bb8.color("yellow");

    bb8.color("red");

    setTimeout(function() {
      bb8.color("green");
    }, 5000);
  });
  }, 3000);



