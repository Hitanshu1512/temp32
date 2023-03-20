$(document).ready(function () {
  // Make a GET request to the root endpoint
  $.get("/", function (data) {
    displayCourt(data);
  });
});

// Display the court with the percentages
function displayCourt(data) {
  var positions = [
    "point_guard",
    "shooting_guard",
    "small_forward",
    "power_forward",
    "center",
  ];
  for (var i = 0; i < positions.length; i++) {
    var element = document.getElementsByClassName(positions[i])[0];
    var percentage = data[positions[i]];
    console.log(positions[i], percentage);
    element.style.display = "block";
    element.textContent = percentage + "%";
  }
}