/* eslint-disable */

$(() => {
  console.log('Document is ready');
  $('h1').css('color', 'red');
  $('h1').css({
    cursor: 'pointer',
    fontFamily: 'sans-serif'
  })
  $('h1').on('click', () => {
    alert('Wow');
  });
  $('li').css('font-family', 'sans-serif');
  $('li').each(function(i) {
    if(i%2 === 0) $(this).css('color', 'green');
    else $(this).css('color', 'orange');
  })
})