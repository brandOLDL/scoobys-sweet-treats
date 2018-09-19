// ---------------------------- menu

$(document).ready(function() {

  $(".burger-nav").on("click", function() {

    $("header nav ul").toggleClass("open");
    $(".burger-nav").toggleClass("change-bg");
  });

});

/* nav stick to top */
$(window).bind('scroll', function() {
  var navHeight = $(window).height() - 50;
  if ($(window).scrollTop() > navHeight) {
    $('header').addClass('opass');
    $('.logo').addClass('shrink');
  } else {
    $('header').removeClass('opass');
    $('.logo').removeClass('shrink');
  }
});

/* smooth scroll */

      $(".frmbtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 650);
      });

      $(".accolades").click(function() {
        $('html, body').animate({
            scrollTop: $("#accolades").offset().top
        }, 650);
      });

      $(".services").click(function() {
          $('html, body').animate({
              scrollTop: $("#carousel-cart").offset().top
          }, 650);
      });

      $(".treats").click(function() {
          $('html, body').animate({
              scrollTop: $("#cupcake").offset().top
          }, 650);
      });
       $(".treat").click(function() {
          $('html, body').animate({
              scrollTop: $("#form").offset().top
          }, 650);
      });

      $(".logo").click(function() {
          $('html, body').animate({
              scrollTop: $("#top").offset().top
          }, 650);
      });
       $(".motif1").click(function() {
          $('html, body').animate({
              scrollTop: $("#motif2").offset().top
          }, 650);
      });
         $(".motif2").click(function() {
          $('html, body').animate({
              scrollTop: $("#motif3").offset().top
          }, 650);
      });
            $(".motif3").click(function() {
          $('html, body').animate({
              scrollTop: $("#form").offset().top
          }, 650);
      });


// ---------------------------- carousel scrolling 

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$('#carousel div').click(function() {
  moveToSelected($(this));
});


// ------------------------------- WAYPOINTS


var $ticked = $('.ticks');
var $welcome = $('.welcome');
var $caro_tx = $('.carousel-text');
var $cupcake = $('.update');
var $review = $('.reviewers');


$ticked.waypoint(function () {
    $ticked.addClass('fade-in-up');
},{ offset: '50%'});

$welcome.waypoint(function () {
    $welcome.addClass('fade-in-up');
},{ offset: '50%'});

$caro_tx.waypoint(function () {
    $caro_tx.addClass('fade-in-up');
},{ offset: '50%'});

$cupcake.waypoint(function () {
    $cupcake.addClass('fade-in-up');
},{ offset: '50%'});

$review.waypoint(function () {
    $review.addClass('fade-in-up');
},{ offset: '50%'});