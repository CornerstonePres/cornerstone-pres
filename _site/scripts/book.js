var $book1 = $('#book1');
var $book_button1 = $('#text1, #book_image1');

var $book2 = $('#book2');
var $book_button2 = $('#text2, #book_image2');

var $book3 = $('#book3');
var $book_button3 = $('#text3, #book_image3');


//On text and picture hover.
$book_button1.hover(

  function(){
    TweenMax.to($book1, .5, {morphSVG:"#book_open1"});
    TweenMax.to($('#book_image1'), .5, {scale:1.1, transformOrigin:"40% 50%"});
    TweenMax.to($('#book_image1'),.5,{webkitFilter: "brightness(1)", filter: "brightness(1)" });
  },

  function(){
    TweenMax.to($book1, .5, {morphSVG:"#book1"});
    TweenMax.to($('#book_image1'), .5, {scale:1, transformOrigin:"40% 50%"});
    TweenMax.to($('#book_image1'),.5,{webkitFilter: "brightness(.75)", filter: "brightness(.75)" });
  }

);

$book_button2.hover(

  function(){
    TweenMax.to($book2, .5, {morphSVG:"#book_open2"});
    TweenMax.to($('#book_image2'), .5, {scale:1.1, transformOrigin:"40% 50%"});
    TweenMax.to($('#book_image2'),.5,{webkitFilter: "brightness(1)", filter: "brightness(1)" });
  },

  function(){
    TweenMax.to($book2, .5, {morphSVG:"#book2"});
    TweenMax.to($('#book_image2'), .5, {scale:1, transformOrigin:"40% 50%"});
    TweenMax.to($('#book_image2'),.5,{webkitFilter: "brightness(.75)", filter: "brightness(.75)" });
  }

);

$book_button3.hover(

  function(){
    TweenMax.to($book3, .5, {morphSVG:"#book_open3"});
    TweenMax.to($('#book_image3'), .5, {scale:1.1, transformOrigin:"40% 50%"});
    TweenMax.to($('#book_image3'),.5,{webkitFilter: "brightness(1)", filter: "brightness(1)" });
  },

  function(){
    TweenMax.to($book3, .5, {morphSVG:"#book3"});
    TweenMax.to($('#book_image3'), .5, {scale:1, transformOrigin:"40% 50%"});
    TweenMax.to($('#book_image3'),.5,{webkitFilter: "brightness(.75)", filter: "brightness(.75)" });
  }

);
