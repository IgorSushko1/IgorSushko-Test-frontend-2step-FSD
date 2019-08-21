$("#dropdown-subparagraph-minus-bedroom").click(function () {
	let val = $("#dropdown-subparagraph-bedrooms").text();
	val = Number(val)-1;
	if (val <= 0) {
		$("#dropdown-subparagraph-bedrooms").html(0);
	} else {
		$("#dropdown-subparagraph-bedrooms").html(val);
	};
});
$("#dropdown-subparagraph-plus-bedroom").click(function () {
	let val = $("#dropdown-subparagraph-bedrooms").text();
	val = Number(val)+1;
	if (val <= 0) {
		$("#dropdown-subparagraph-bedrooms").html(0);
	} else {
		$("#dropdown-subparagraph-bedrooms").html(val);
	};
});
// alert("РАБОТАЕТ!!!");
// $(document).ready(function () {
// 	$("a").click(function (event) {
// 		jAlert("As you can see, the link no longer took you to jquery.com");
// 		event.preventDefault();
// 	});
// });
// $("#load1").click(function(){
// 	$("#load2").clone().appendTo("#load2");
// 	});