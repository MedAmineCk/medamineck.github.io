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
    closeContactsModule();
  } else {
    openContactsModule();
  }
}

//send email
function sendEmail() {
  window.location = "mailto:contact@medamineck.com";
}

function closeContactsModule() {
  $("header").addClass("fixed");
  $("header .contacts").addClass("onScroll");
}

function openContactsModule() {
  $("header").removeClass("fixed");
  $("header .contacts").addClass("fixed");
}
