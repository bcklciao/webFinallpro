var buy_src = sessionStorage.getItem("detail_src");
var buy_num = sessionStorage.getItem("buy_num");
var buy_price = sessionStorage.getItem("buy_price");
var isCard_frame = sessionStorage.getItem("isCard_frame")
var detail_bk = sessionStorage.getItem("detail_bk")
var img_src="../"+buy_src
var card_name = sessionStorage.getItem("card_name");
var isBuy = sessionStorage.getItem("isBuy");
var buy_card = sessionStorage.getItem("buy_card");
// console.log(buy_src)
// console.log(isCard_frame)
// console.log(img_src)
// console.log(detail_bk)
// console.log(buy_num)
// console.log(buy_price)
// console.log(card_name)

if(isBuy==null){
	$('.bag-empty').show()
	$('.pay').hide()
}
else if(isBuy=='true'){
	$('.bag-empty').hide()
	$('.pay').show()
	if(buy_card==null){
		buy_card=''
	}
	if(isCard_frame=='true'){
		buy_card+="<div class='item'><div class='products-card-img card-frame'><a><img src="+img_src+
		" style='background-color:"+detail_bk+"'></a></div>"+
		"<div class='amount'><div class='title'><span>"+card_name+"</span></div>"+
		"<div class='amountBtn'>-</div><span class='amount-num'>"+buy_num+"</span><div class='amountBtn'>+</div>"+
		"<div class='buy-price'><span>€</span><span class='price'>"+buy_price+"</span></div></div></div>"
	}
	else{
		buy_card+="<div class='item'><div class='products-card-img'><a><img src="+img_src+
		" style='background-color:"+detail_bk+"'></a></div>"+
	"<div class='amount'><div class='title'><span>"+card_name+"</span></div>"+
	"<div class='amountBtn'>-</div><span class='amount-num'>"+buy_num+"</span><div class='amountBtn'>+</div>"+
	"<div class='buy-price'><span>€</span><span class='price'>"+buy_price+"</span></div></div></div>"
	}
	$('.buy-card').append(buy_card)
	sessionStorage.setItem("buy_card",buy_card);
	sessionStorage.setItem("isBuy",'false');
}
else if(buy_card.trim()==''){
	$('.bag-empty').show()
	$('.pay').hide()
}
else {
	$('.buy-card').append(buy_card)
	$('.pay').show()
}


$('.amountBtn').click(function () {
	num=parseInt($(this).siblings('.amount-num').text());
	price=parseFloat($(this).siblings('.buy-price').find('.price').text());
	if($(this).text()=='+'){
		$(this).siblings('.amount-num').text(num+1);
		$(this).siblings('.buy-price').find('.price').text((price/num*(num+1)).toFixed(2));
	}
	else if ($(this).text()=='-' && $(this).siblings('.amount-num').text()!='0') {
		$(this).siblings('.amount-num').text(num-1);
		$(this).siblings('.buy-price').find('.price').text((price/num*(num-1)).toFixed(2));
	}
	if ($(this).siblings('.amount-num').text()=='0'){
		console.log($(this).parents().eq(1).remove())
	}
	sessionStorage.setItem("buy_card",$('.buy-card').html());
});

$('.pay').click(function () {
	alert('Payment is not supported yet 😭');
});