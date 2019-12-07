$('.the-trust__slider-items').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<button type="button" class="the-trust-arrow-next the-trust-arrow  slick-next"> <img src="../../assets/img/the-trust/next-arrow.png" alt="next"></button>',
    prevArrow: '<button type="button" class="the-trust-arrow-prev the-trust-arrow  slick-prev"><img src="../../assets/img/the-trust/prev-arrow.png" alt="next"></button>',
    responsive: [
        {
            breakpoint:  1106,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint:  910,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint:  718,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true
            }
        },
    ]
});

