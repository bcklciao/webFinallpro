window.onscroll = function () {
    var scrollTop = $(this).scrollTop(); // 滚动条距离顶部的高度
    if(scrollTop==0){
        $('.header').removeClass('header-scroll');
    }
    else{
        $('.header').addClass('header-scroll');
    }
    if($(window).width()<750){
        $('.header-nav').css('display','none');
    }
}