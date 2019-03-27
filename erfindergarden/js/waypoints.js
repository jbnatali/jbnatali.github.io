//test connection between .html and .js
console.log('waypoints.js says "hi!"');

//switch used to adjust count
let switchScrollingDown = false;

// image number currently displayed
var imgCount =0;
var $notvisible = $('.' + imgCount);

// trigger when scrolling down/up
var $trigger = $('.trigger');

/*when element appears from the bottom of the page - user scrolling down*/
$trigger.waypoint(function (direction) {
  if (direction == 'down') {
    if (switchScrollingDown === true){
      imgCount++;
      console.log(imgCount);
    } else {
      switchScrollingDown = true;
      console.log('switchScrollingDown is now ' + switchScrollingDown);
    }
  var $notvisible = $('.' + imgCount);
  $notvisible.addClass('js-visible');
} else {
  var $notvisible = $('.' + imgCount);
  $notvisible.removeClass('js-visible');
  if (switchScrollingDown === true){
    console.log('you are going back up already???');
    imgCount--;
    console.log(imgCount);
  }
}
}, { offset: '25%' });



/*when element appears from the top of the page - user scrolling up*/
$trigger.waypoint(function (direction) {
  if (direction == 'up') {
    if (switchScrollingDown === false){
          imgCount--;
          console.log(imgCount);
        } else {
        switchScrollingDown = false;
        console.log('switchScrollingDown is now ' + switchScrollingDown);
        }
    var $notvisible = $('.' + imgCount);
    $notvisible.addClass('js-visible');
} else {
      var $notvisible = $('.' + imgCount);
      $notvisible.removeClass('js-visible');
      if (switchScrollingDown === false){
        console.log('you are going back down already???');
        imgCount++;
        console.log(imgCount);
      }
    }
}, { offset: '-25%' });
