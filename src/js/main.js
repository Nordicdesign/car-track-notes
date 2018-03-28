// JS
$('document').ready(function (){

// initiate all variables
sessionStorage.setItem('1entry', '');
sessionStorage.setItem('1mid', '');
sessionStorage.setItem('1exit', '');
sessionStorage.setItem('2entry', 'under');
sessionStorage.setItem('2mid', '');
sessionStorage.setItem('2exit', 'over');
sessionStorage.setItem('3', '');
sessionStorage.setItem('4', '');
sessionStorage.setItem('5', '');
sessionStorage.setItem('6', '');
sessionStorage.setItem('7', '');
sessionStorage.setItem('8', '');
sessionStorage.setItem('9', '');
sessionStorage.setItem('10', '');
sessionStorage.setItem('11', '');
sessionStorage.setItem('12', '');
sessionStorage.setItem('13', '');
sessionStorage.setItem('14', '');
sessionStorage.setItem('15', '');
sessionStorage.setItem('16', '');
sessionStorage.setItem('17', '');
sessionStorage.setItem('18', '');
sessionStorage.setItem('19', '');
sessionStorage.setItem('20', '');


// trigger the sidebar
$('.track area').click(function() {

  var turn = whatTurn($(this));

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
$('.sidebar li').click(function (){

  $(this).siblings().removeClass('selected');
  $(this).toggleClass('selected');

  //what it is my friend?
  var value = $(this).text();
  var area = $(this).parent('ul').attr('data-area');
  console.log(area);
  console.log(value);

  sessionStorage.setItem('key', 'value');

});


//close the Sidebar
$('.closeButton').click(function(){
  toggleSidebar();
});



// ========== UTILS =======================


// check the turn values ==================
function checkTurn(data){
  var turn = whatTurn(data);
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

  var turn = $(element).attr('title');
  console.log(turn);
  return turn;
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
