$(".slider_range-slider").ionRangeSlider({
	type: "double",
	min: 0,
  max: 15000,
	from: 5000,
	to: 10000,
	step: 250,
	postfix: "₽"
});

$(".irs-min").remove();
$(".irs-max").remove();
$(".irs-single").css({
	"background":"white",
	"color": "rgba(31, 32, 65, 0.5)",
	"display":"flex",
	"justify-content": "flex-end",
	"font-weight": "600",
});

var amountOfMoney;

$(".irs-single").on( function() {
amountOfMoney = $(".irs-single").text()
});