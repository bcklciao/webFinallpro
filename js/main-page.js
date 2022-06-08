$(document).ready(function(){
    changeInnerWidth();
});
$(window).resize(function(){
    changeInnerWidth();
});

function changeInnerWidth(){
    var products = $('.gallery-products-inner');
    var card_width=$('.products-card-img').eq(0).css("width");
    for(var i=0;i<products.length;i++){
        var card_num = products.eq(i).children().length;
        var num =(card_num+0.5)*parseInt(card_width.slice(0, -2));
        products.eq(i).css("width",num);
        // console.log(products.eq(i).css("width"))
    }
}

$('.gallery-btn>.btn-right').click(function () {
    var inner = $(this).parent().prev().children();
    var inner_width =parseInt(inner.css("width").slice(0, -2))
    var inner_left = parseInt(inner.css("left").slice(0, -2))
    var window_width = $(window).width()
    if(inner_width+inner_left>window_width){
        inner.animate({left:inner_left-window_width/4},400)
    }
});

$('.gallery-btn>.btn-left').click(function () {
    var inner = $(this).parent().prev().children();
    var inner_width =parseInt(inner.css("width").slice(0, -2))
    var inner_left = parseInt(inner.css("left").slice(0, -2))
    var window_width = $(window).width()
    if(inner_left<0){
        inner.animate({left:inner_left+window_width/4},400)
    }
});

$('.products-card-img').click(function () {
    var detail_src=$(this).children().children().attr('src')
    // document.cookie="detail_src="+detail_src
    sessionStorage.setItem("detail_src",detail_src);
    var isCard_frame=$(this).is('.card-frame')
    sessionStorage.setItem("isCard_frame",isCard_frame);
    var detail_bk=$(this).children().children().css('background-color')
    sessionStorage.setItem("detail_bk",detail_bk);
    var class_name=$(this).parents().eq(3).find('.gallery-title>p').text()
    sessionStorage.setItem("class_name",class_name);
    var card_name=$(this).siblings().children().eq(0).text()
    sessionStorage.setItem("card_name",card_name);
    var card_price=$(this).siblings().children().eq(1).text().slice(1)
    sessionStorage.setItem("card_price",card_price);

});

$('.AddToBag>button').click(function () {
    alert("The goods are currently sold out！Please look at the others :D")
});
$('.nav').click(function (){
    if($(window).width()<750){
        if($('.header-nav').css('display')=='none'){
            $('.header-nav').css('display','flex');
        }
        else{
            $('.header-nav').css('display','none');
        }
    }
});
$('.products').click(function () {
    if($(window).width()<750){
        if($('.header-nav').css('display')=='flex'){
            $('.header-nav').css('display','none');
        }
    }
});
$('.main').click(function () {
    if($(window).width()<750){
        if($('.header-nav').css('display')=='flex'){
            $('.header-nav').css('display','none');
        }
    }
});