// JS
$('document').ready(function (){


var turn = '';

// trigger the sidebar
$('.track area').on('click',function() {

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
  var value = $(this).children('button').attr('value');
  var area = $(this).parent('ul').attr('data-area');
  console.log(turn);
  console.log(area);
  console.log(value);

  sessionStorage.setItem(turn + area, value);

});


//close the Sidebar
$('.closeButton').on("click touch", function(){
  toggleSidebar();
});


// write the summary
// $('.summaryTab').click(function(){
//   for (i=1; i < 22; i++) {
//     $('.summary div').append('<p>Turn '+i'has:'+  +'</p>')
//   }
// });


// ========== UTILS =======================


// check the turn values ==================
function checkTurn(data){
  var entry = sessionStorage.getItem(turn + 'entry');
  var mid = sessionStorage.getItem(turn + 'mid');
  var exit = sessionStorage.getItem(turn + 'exit');

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

  //set the values for entry corner

  // for (i=0; i<3; i++) {
  //   var area;
  //   if (i === 0){
  //     var area = 'entry';
  //   }
  //   else if (i === 1) {
  //     var area = 'mid';
  //   }
  //   else if (i === 2) {
  //     var area = 'exit'
  //   }
  //   else {
  //     console.log('hello!');
  //   }
  //
  //   console.log('#'+area+'-under');
  //
  //   if (area === 'under') {
  //     $('#'+area+'-under').addClass('selected');
  //     $('#'+area+'-over').removeClass('selected');
  //   }
  //   else if (area === 'over') {
  //     $('#'+area+'-under').removeClass('selected');
  //     $('#'+area+'-over').addClass('selected');
  //   }
  //   else {
  //     $('#'+area+'-under').removeClass('selected');
  //     $('#'+area+'y-over').removeClass('selected');
  //   }
  // }


}


//get the turn number ==================
function whatTurn(element) {

  turn = $(element).attr('title');
  console.log(turn);
}

// open or close the sidebar ==================
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
