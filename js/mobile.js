/*************header*************/

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

