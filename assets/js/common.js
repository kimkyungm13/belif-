$(function () {
    const topSwiper = new Swiper(".top-banner", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    const mainSwiper = new Swiper(".mainSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
    const itemvSwiper = new Swiper(".itemSwiperVert", {
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        direction: "vertical",
        slidesPerView: 1.8,
        spaceBetween: 30,
    });
    const itemSwiper = new Swiper(".itemSwiper", {
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        slidesPerView: 3,
        spaceBetween: 30,
    });

    const noticeswiper = new Swiper(".notice-list", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    $('.menu-all').click(function () {
        $('.menu-all').toggleClass('active');
        $('.menu-category').stop().slideToggle()
    });
    // 스크롤 헤더
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) { // 스크롤 위치가 최상단이 아닌 경우
            // 마우스 휠을 아래로 스크롤할 때와 동일한 동작 수행
            $('header').addClass('wheel');
            $('.side_bnr_wrap').css('display', 'block');
            // 추가로 필요한 동작을 여기에 추가합니다.
        } else {
            // 스크롤이 최상단에 도달했을 때 실행할 코드
            $('header').removeClass('wheel');
            $('.menu-wrap').css('display', 'none');
            // 추가로 필요한 동작을 여기에 추가합니다.
        }
    });
    //퀵메뉴
    let lastScroll = 0;
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr > lastScroll

        ) {
            $('.quick').css('display', 'none')
        } else {
            $('.quick').css('display', 'flex')
        }
        lastScroll = curr
    });
    $('.bt_top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    $('.bt_btm').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    });
})

