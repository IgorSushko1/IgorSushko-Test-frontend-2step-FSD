$(document).ready(function () {
  $("#datepicker").datepicker({
    multipleDates: true,
    onSelect: function (fd, dates, inst) {
      var reg = /([0-9\.]+)\s([0-9\.]+)/g;
      var $frst = $('.result-datepicker-first-date'),
        $secnd = $('.result-datepicker-second-date'),
        string = '';

      dates.forEach(function (date) {
        string += date.getDate().toString().padStart(2, "0") + '.' + date.getMonth().toString().padStart(2, "0") + '.' + date.getFullYear() + ' ';
      })
      var firstDate = string.split(reg);


      $frst.html("<span class='pick-up-numbers-card-date-for-two-inputs' style='color:rgba(31, 32, 65, 0.75)'>" + firstDate[1] + "</span>" + " " + "<span class='material-icons pick-up-numbers-card-icon-for-date'>expand_more</span>");
      $secnd.html("<span class='pick-up-numbers-card-date-for-two-inputs'style='color:rgba(31, 32, 65, 0.75)'>" + firstDate[2] + "</span>" + " " + "<span class='material-icons pick-up-numbers-card-icon-for-date'>expand_more</span>");
    },
    showButtonPanel: true,
    dateFormat: "yy.mm.dd",
    duration: "slow",
    clearButton: true,
    minDate: new Date(2019, 7, 1),
    nextText: "Later",
    selectOtherMonths: true,
    showAnim: "fold",
    showButtonPanel: true,
    currentText: "ОЧИСТИТЬ",
    closeText: "ПРИМЕНИТЬ",
    dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    iconHeader: ["ui-icon-arrow-1-w", "ui-icon-arrow-1-e"]
  });

  $('.ui-icon').addClass('.ui-icon-arrow-1-e').removeClass('ui-icon-circle-triangle-w');
});

$(document).ready(function () {
  $("#datepicker-single").datepicker({
    multipleDates: true,
    onSelect: function (fd, dates, inst) {
      var reg = /([0-9]+\s[а-яё]+)/g;
      var $frst = $('#datepicker__one-field_input'),
        string = '';

      dates.forEach(function (date) {
        var mon = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
        date.getMonth()
        string += date.getDate().toString().padStart(2, "0") + ' ' + mon[date.getMonth()];
      })
      var firstDate = string.split(reg);


      $frst.html("<span style='color:rgba(31, 32, 65, 0.75)'>" + firstDate[1] + " - " + firstDate[3] + "</span>");
    },

    showButtonPanel: true,
    dateFormat: "yy.mm.dd",
    duration: "slow",
    clearButton: true,
    gotoCurrent: false,
    minDate: new Date(2019, 7, 1),
    nextText: "Later",
    selectOtherMonths: true,
    showAnim: "fold",
    showButtonPanel: true,
    currentText: "ОЧИСТИТЬ",
    closeText: "ПРИМЕНИТЬ",
    dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    iconHeader: ["ui-icon-arrow-1-w", "ui-icon-arrow-1-e"]

  });

  $('.ui-icon').addClass('.ui-icon-arrow-1-e').removeClass('ui-icon-circle-triangle-w');
});