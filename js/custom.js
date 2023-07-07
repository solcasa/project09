$(function () {
    $('button').click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');

        var $outer = $this.closest('.outer');
        var $current = $outer.find(' > .tabs > .tab.active');
        var $post = $outer.find(' > .tabs > .tab').eq(index);

        $current.removeClass('active');
        $post.addClass('active');
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
    });

    // $('.price_wrap').slick({
    //     arrows: false,
    //     slidesToShow: 3,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ]
    // });

    // $('.tab .book_shelf').slick({
    //     arrows: false,
    //     slidesToShow: 7,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //     ]
    // });실패....ㅠㅠ 
});