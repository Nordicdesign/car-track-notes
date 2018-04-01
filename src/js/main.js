// JS
$('document').ready(function (){

  //make tappable areas clickable and highlight them
  var initial_opts = $.extend({},
    {
        staticState: true,
        fill: true,
        fillColor: 'f2f3f4',
        stroke: true,
        strokeWidth: 1,
        strokeColor: 'cccccc'
    });

  $('img').mapster(initial_opts)
      .mapster('snapshot');


// initiate global variable
var turn = '';

// trigger the sidebar
$('area').on('click touch',function() {
  whatTurn($(this));

  //write the turn header
  $('.sidebar h1').empty().append('Turn ' + turn);

  // check if it's open already
  var visible = $('.sidebar').is(':visible');

  if (visible === true) {
    console.log("it's open!");
  }
  else {
    //open sidebar
    toggleSidebar();
  }

  checkTurn($(this));

})



// select an option
$('.sidebar li').on("click touch",function (){
  $(this).siblings().removeClass('selected');
  $(this).toggleClass('selected');

  //what it is my friend?

  // check if nothing is selected
  if ($(this).hasClass('selected')) {
    console.log('something is selected')
    var value = $(this).children('button').attr('value');
    var area = $(this).parent('ul').attr('data-area');
    console.log(turn);
    console.log(area);
    console.log(value);

    localStorage.setItem(turn + area, value);
  }
  else {
    var area = $(this).parent('ul').attr('data-area');
    localStorage.setItem(turn + area, '');
  }


});


//close the Sidebar
$('.closeButton').on("click touch", function(){
  toggleSidebar();
});


// write the summary
$('.summaryTab').click(function(){

  // clean it first
  $('#summary .content').empty();

  var isThereContent = 0; // used later to check whether to display content or not

  // get number of turns
  var numberTurns = $('.track area').length;
  numberTurns++; // increase number of turns by 1 as tracks do not start on turn 0

  // loop through all the turns, see whether there's any content
  for (i=1; i < numberTurns; i++) {

    console.log(i);

    // get information about each turn area
    var entry = localStorage.getItem(i + 'entry');
    var mid = localStorage.getItem(i + 'mid');
    var exit = localStorage.getItem(i + 'exit');

    // Is there any content?
    if (entry || mid || exit) {
      isThereContent = 1; // so we display notes instead of 'no content' message

      // write it on screen
      $('#summary .content').append('<div class="summaryTurn'+i+'"><h2>Turn '+i+'</h2></div>');
      if(entry) {
        $('.summaryTurn'+i).append('<p>Turn entry has <strong>'+entry+'steer</strong></p>');
      }
      if(mid) {
        $('.summaryTurn'+i).append('<p>Mid turn has <strong>'+mid+'steer</strong></p>');
      }
      if(exit) {
        $('.summaryTurn'+i).append('<p>Turn exit has <strong>'+exit+'steer</strong></p>');
      }

    }


  }  // loop ends

  if (isThereContent === 0) {
    $('#summary .content').append("<p>No information yet. Why not get out on track and do some laps?</p>");
  }

  // show summary area
  $('#summary').modal();
});





// view info
$('.infoTab').click(function() {
  $('.infoDetail').modal()
});




// clear all content to start again
$('.clear').click(function(){

  localStorage.clear();
  snackbar();
  $('.sidebar').hide(); // close the sidebar if open

});





// ========== UTILS =======================

// off screen menu using Scotch Panels

$('#panel').scotchPanel({
    containerSelector: 'body', // As a jQuery Selector
    direction: 'left', // Make it toggle in from the left
    duration: 300, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '250px', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});



// show the snackbar

function snackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// check the turn values ==================
function checkTurn(data){
  var entry = localStorage.getItem(turn + 'entry');
  var mid = localStorage.getItem(turn + 'mid');
  var exit = localStorage.getItem(turn + 'exit');

  console.log('entry is ' + entry);
  console.log('mid corner is ' + mid);
  console.log('exit is ' + exit);

// checking corner entry information
    if (entry === 'under') {
      $('#entry-under').addClass('selected');
      $('#entry-over').removeClass('selected');
    }
    else if (entry === 'over') {
      $('#entry-under').removeClass('selected');
      $('#entry-over').addClass('selected');
    }
    else {
      $('#entry-under').removeClass('selected');
      $('#entry-over').removeClass('selected');
    }


// checking mid corner information
    if (mid === 'under') {
      $('#mid-under').addClass('selected');
      $('#mid-over').removeClass('selected');
    }
    else if (mid === 'over') {
      $('#mid-under').removeClass('selected');
      $('#mid-over').addClass('selected');
    }
    else {
      $('#mid-under').removeClass('selected');
      $('#mid-over').removeClass('selected');
    }


// checking corner exit information
    if (exit === 'under') {
      $('#exit-under').addClass('selected');
      $('#exit-over').removeClass('selected');
    }
    else if (exit === 'over') {
      $('#exit-under').removeClass('selected');
      $('#exit-over').addClass('selected');
    }
    else {
      $('#exit-under').removeClass('selected');
      $('#exit-over').removeClass('selected');
    }

}


//get the turn number ==================
function whatTurn(element) {

  turn = $(element).attr('title');
  console.log(turn);
}

// open or close the sidebar ==================
function toggleSidebar() {

    $('.sidebar').slideToggle();
}

}); // closing document. ready
