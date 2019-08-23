$( function() {
	$( "#datepicker" ).datepicker({
		showButtonPanel: true,
		dateFormat: "yy.mm.dd",
		duration: "slow",
		// gotoCurrent: false,
		minDate: new Date(2019, 7, 1),
		nextText: "Later",
		selectOtherMonths: true,
		showAnim: "fold",
		showButtonPanel: true,
		currentText: "ОЧИСТИТЬ",
		closeText: "ПРИМЕНИТЬ",
		dayNames: [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ],
		monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesShort: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
		dayNamesMin:	[ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
		iconHeader: ["ui-icon-arrow-1-w","ui-icon-arrow-1-e"]
		// showOn: "button" показывает кнопку вызова календаря пожет быть hover или both
		// showOtherMonths: true уже стоит
		// yearSuffix: "CE" приписка к году
	});
	// $( ".selector" ).datepicker( "option", "gotoCurrent", true );
	// $( ".selector" ).datepicker( "option", "nextText", "BlaBla" ).css("background", "red");
	// $( ".selector" ).datepicker( "destroy" );
	$('.ui-icon').addClass('.ui-icon-arrow-1-e').removeClass('ui-icon-circle-triangle-w');
} );

