$('.works__slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1142,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint:  768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true
            }
        },
    ]
});
