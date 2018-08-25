 $(document).ready(function(){
    $('.sl').slick({
      	 slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 700,
        
         //  prevArrow: '<img src="../img/arrow-left.png">'
         // nextArrow: '<img src="../img/arrow-right.png">'
        prevArrow: ' <button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
     });
});

$('.hamburger-menu').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile-menu').toggle();
})