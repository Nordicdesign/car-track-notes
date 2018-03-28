// JS
$('document').ready(function (){



// trigger the sidebar
$('.track img').click(function() {
  toggleSidebar();
})


// select an option
$('.sidebar li').click(function (){

  $(this).siblings().removeClass('selected');
  $(this).toggleClass('selected');

  // $(this).siblings().removeClass('selected').click(toggleSidebar(500));
});


function toggleSidebar(delay) {
  if (delay) {
    $('.sidebar').delay(delay).slideToggle();
  }
  else {
    $('.sidebar').slideToggle();
  }



}




  // closing document. ready
});
