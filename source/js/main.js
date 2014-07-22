//= require jquery
//= require responsive-nav
//= require jquery.scrollTo/jquery.scrollTo
//= require jQuery-One-Page-Nav
//= require skrollr

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).before(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  } else {
    console.log("Done!");
  }
}

$(function () {

  //var s = skrollr.init();

  BackgroundCheck.init({
    targets: '.color-swap',
    images:  '.about-me',
  });

 /*$('.nav-list').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });*/


/*$(document).on('scroll', $('.message'), function() {
  console.log('Scrolling event.');
  //var headerOffset = $('#header').scrollTop();
  //console.log(headerOffset);
});*/

  $('nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });

  $('#scroll-more').click(function() {
    console.log("Clicked arrow!");
    $.scrollTo('#about-section');
  });

  $('.more-button').click(function() {

    $('.show-more').slideDown();
    $(this).toggle().animate();

  });

  /* Get current page URL */
  var currentPage = window.location.pathname;
  console.log(currentPage);
  if (currentPage == '/') {
    showText(".cursor", "Hello, World! ", 0, 200);
  }
});


