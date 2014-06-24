//= require jquery
//= require responsive-nav

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    console.log("Executing!");
    $(target).before(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  } else {
    console.log("Done!");
  }
}

$(function () {
  /* Responsive Navigation */
  //var nav = responsiveNav(".nav-collapse");
  /* Get current page URL */
  var currentPage = window.location.pathname;
  console.log(currentPage);
  if (currentPage == '/') {
    showText(".cursor", "Hello, World! ", 0, 200);
  } else if (currentPage == '/about') {
    showText(".cursor", "Who Am I? ", 0, 175);
  }
});



