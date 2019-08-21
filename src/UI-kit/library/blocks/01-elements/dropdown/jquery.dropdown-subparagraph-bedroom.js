$("#dropdown-subparagraph-bedroom-minus").click(function () {
	let val = $("#dropdown-subparagraph-bedroom").text();
	val = Number(val)-1;
	if (val <= 0) {
		$("#dropdown-subparagraph-bedroom").html(0);
	} else {
		$("#dropdown-subparagraph-bedroom").html(val);
	};
});
$("#dropdown-subparagraph-bedroom-plus").click(function () {
	let val = $("#dropdown-subparagraph-bedroom").text();
	val = Number(val)+1;
	if (val <= 0) {
		$("#dropdown-subparagraph-bedroom").html(0);
	} else {
		$("#dropdown-subparagraph-bedroom").html(val);
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