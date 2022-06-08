
$('.card-detail').click(function () {
	if($('.card-detail>.products-card-img>a>img')[0].style.width==''){
		$('.card-detail>.products-card-img>a>img')[0].style.width = '35vw';
		$('.card-detail')[0].style.cursor = 'url(../img/cursor-close@2x.png),pointer';
	}
	else{
		$('.card-detail>.products-card-img>a>img')[0].style.width = '';
		$('.card-detail>.products-card-img>a>img')[0].hover=''
		$('.card-detail')[0].style.cursor = '';
	}
});

$('.amountBtn').click(function () {
	num=parseInt($('.amount-num').text());
	price=parseFloat($('.price').text());
	if($(this).text()=='+'){
		$('.amount-num').text(num+1);
		$('.price').text((price/num*(num+1)).toFixed(2));
	}
	else if ($(this).text()=='-' && $('.amount-num').text()!='1') {
		$('.amount-num').text(num-1);
		$('.price').text((price/num*(num-1)).toFixed(2));
	}
});
var class_name = sessionStorage.getItem("class_name");
var card_name = sessionStorage.getItem("card_name");
var card_price = sessionStorage.getItem("card_price");
var isCard_frame = sessionStorage.getItem("isCard_frame")
var detail_src = sessionStorage.getItem("detail_src")
var detail_bk = sessionStorage.getItem("detail_bk")
var img_src="../"+detail_src
// console.log(detail_src)
// console.log(isCard_frame)
// console.log(img_src)
// console.log(detail_bk)
// console.log(class_name)
// console.log(card_name)
// console.log(card_price)
$('.category').text(class_name+' /')
$('.title>span').text(card_name)
$('.price').text(card_price)
$('.card-detail>.products-card-img>a>img').attr('src',img_src).css('background-color',detail_bk)
if(isCard_frame=='true'){
	$('.card-detail>.products-card-img').addClass('card-frame')
}
else{
	$('.card-detail>.products-card-img').removeClass('card-frame')
}

$('.AddToBag>button').click(function () {
    // var buy_src=$('.products-card-img').children().children().attr('src')
    var buy_num=parseInt($('.amount-num').text());
    var buy_price=parseFloat($('.price').text());
    // console.log(buy_src)
    console.log(buy_num)
    console.log(buy_price)
    // sessionStorage.setItem("buy_src",buy_src);
    sessionStorage.setItem("buy_num",buy_num);
    sessionStorage.setItem("buy_price",buy_price);
    sessionStorage.setItem("isBuy",'true');
    alert("Add success!")
});
