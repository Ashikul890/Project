
$('.banner-slider').slick({
  dots: true,
    arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
 
});

$('.screen-item').slick({
  dots: true,
    arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
   autoplay:true, 
});



//feedback text slider

$('.text').slick({
  dots: false,
    arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    infinite:true,
 asNavFor:".img",
});
//feedback img slider

$('.img').slick({
  dots: true,
    arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    infinite:true,
  asNavFor:".text",
    centerMode:true,
    centerPadding:"0",
});

$(document).ready(function(){
    $('.venobox').venobox(); 
});