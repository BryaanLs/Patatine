function carrossel() {
    $(".slider").slick({
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

}
carrossel();


