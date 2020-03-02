$(document).ready(function(){

  // make this work for all colors
  // do not add any more event listeners
  // do not add a .on or .click to the code.
  // do not pass go , do not collect $200
  $('.color1').on('click', function(event){
    var curDate = Date.now();
    var $target = $( event.target) ;
    var color = $target.css('background-color');
    $('#times').append(`<div style='color:${color}'>${curDate}</div>`)
  });

});