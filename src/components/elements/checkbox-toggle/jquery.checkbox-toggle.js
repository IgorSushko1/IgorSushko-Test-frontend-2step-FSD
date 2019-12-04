$("input.toggle-pets").click(function() {
	if ($("input.toggle-pets").is(":checked")) {
		$("#checkbox-background-gradient-pets").css("background","linear-gradient(180deg, #BC9CFF, #8BA4F9)");
		$(".checkbox-toggle-pets").css({
			"left": "22px",
			"background": "linear-gradient(180deg, #BC9CFF, #8BA4F9)"
		})
	} else {
		$(".checkbox-background-gradient-pets").css("background","linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)");
		$(".checkbox-toggle-pets").css({
			"left": "4px",
			"background": "linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)"
		})
	};
})

$("input.toggle-smoke").click(function() {
	if ($("input.toggle-smoke").is(":checked")) {
		$(".checkbox-background-gradient-smoke").css("background","linear-gradient(180deg, #BC9CFF, #8BA4F9)");
		$(".checkbox-toggle-smoke").css({
			"left": "22px",
			"background": "linear-gradient(180deg, #BC9CFF, #8BA4F9)"
		})
	} else {
		$(".checkbox-background-gradient-smoke").css("background","linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)");
		$(".checkbox-toggle-smoke").css({
			"left": "4px",
			"background": "linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)"
		})
	};
})

$("input.toggle-guests").click(function() {
	if ($("input.toggle-guests").is(":checked")) {
		$(".checkbox-background-gradient-guests").css("background","linear-gradient(180deg, #BC9CFF, #8BA4F9)");
		$(".checkbox-toggle-guests").css({
			"left": "22px",
			"background": "linear-gradient(180deg, #BC9CFF, #8BA4F9)"
		})
	} else {
		$(".checkbox-background-gradient-guests").css("background","linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)");
		$(".checkbox-toggle-guests").css({
			"left": "4px",
			"background": "linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)"
		})
	};
})