/*************header*************/
//menu item clicked
$("nav a").on("click", function () {
  className = "active";
  $("nav a").removeClass(className);
  $(this).addClass(className);
});

//change header on scroll
$(window).bind("scroll", function () {
  checkSrollTop();
});

function checkSrollTop() {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("fixed");
    $("header .contacts").addClass("onScroll");
  } else {
    $("header").removeClass("fixed");
    $("header .contacts").addClass("fixed");
  }
}

//scrolling
$(document).ready(function () {
  checkSrollTop();
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        400,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//send email
function sendEmail() {
  window.location = "mailto:contact@medamineck.com";
}
