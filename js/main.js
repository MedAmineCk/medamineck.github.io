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


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker registered', reg))
      .catch(err => console.log('❌ SW registration failed:', err));
  });
}

/*************mobile header*************/

//menu item clicked
$('nav a').on('click', function () {
  className = 'active';
  $('nav a').removeClass(className);
  $(this).addClass(className);
  $('nav').removeClass(className);
  $('.nav_tab_icon').removeClass('open');
});

// tap on mobile menu icon
$('.nav_tab_icon').on('click', function(){
  $(this).toggleClass('open');
  $('nav').toggleClass('active')
})

$('header .contacts').on('click', function(){
  $(this).toggleClass('active')
})