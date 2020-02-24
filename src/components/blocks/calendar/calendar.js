$(document).ready(() => {
  $('#js-datepicker__duble').datepicker({
    multipleDates: true,
    onSelect(fd, dates, inst) {
      const reg = /([0-9\.]+)\s([0-9\.]+)/g;
      const $frst = $('.calendar__arrival-date');
      const $secnd = $('.calendar__departure-date');
      let string = '';

      dates.forEach((date) => {
        string += `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} `;
      });
      const arrayDate = string.split(reg);


      $frst.html(`<div class="calendar__date" style="color:rgba(31, 32, 65, 0.75)">${arrayDate[1]}</div>` + ' ' + '<span class="material-icons calendar__icon_double">expand_less</span>');
      $secnd.html(`<div class="calendar__date" style="color:rgba(31, 32, 65, 0.75)">${arrayDate[2]}</div>` + ' ' + '<span class="material-icons calendar__icon_double">expand_less</span>');
    },
    showButtonPanel: true,
    dateFormat: 'yy.mm.dd',
    duration: 'slow',
    clearButton: true,
    minDate: new Date(2019, 7, 1),
    nextText: 'Later',
    selectOtherMonths: true,
    showAnim: 'fold',
    currentText: 'ОЧИСТИТЬ',
    closeText: 'ПРИМЕНИТЬ',
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    iconHeader: ['ui-icon-arrow-1-w', 'ui-icon-arrow-1-e'],
  });

  $('.ui-icon').addClass('.ui-icon-arrow-1-e').removeClass('ui-icon-circle-triangle-w');
});

$(document).ready(() => {
  $('#js-datepicker__single').datepicker({
    multipleDates: false,
    onSelect(fd, dates, inst) {
      const reg = /([0-9]+\s[а-яё]+)/g;
      const $frst = $('.calendar__range');
      let string = '';

      dates.forEach((date) => {
        const mon = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        string += `${date.getDate().toString().padStart(2, '0')} ${mon[date.getMonth()]}`;
      });
      const arrayDate = string.split(reg);


      $frst.html(`<div class="calendar__date" style="color:rgba(31, 32, 65, 0.75)">${arrayDate[1]} - ${arrayDate[3]}</div>`);
    },

    showButtonPanel: true,
    dateFormat: 'yy.mm.dd',
    duration: 'slow',
    clearButton: true,
    gotoCurrent: false,
    minDate: new Date(2019, 7, 1),
    nextText: 'Later',
    selectOtherMonths: true,
    showAnim: 'fold',
    currentText: 'ОЧИСТИТЬ',
    closeText: 'ПРИМЕНИТЬ',
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    iconHeader: ['ui-icon-arrow-1-w', 'ui-icon-arrow-1-e'],

  });

  $('.ui-icon').addClass('.ui-icon-arrow-1-e').removeClass('ui-icon-circle-triangle-w');
});

$(document).ready(() => {
  $('#js-datepicker__birthday').datepicker({
    multipleDates: false,
    showButtonPanel: true,
    dateFormat: 'dd.mm.yyyy',
    duration: 'slow',
    clearButton: true,
    gotoCurrent: false,
    minDate: new Date(1900, 0, 1),
    nextText: 'Later',
    selectOtherMonths: true,
    showAnim: 'fold',
    currentText: 'ОЧИСТИТЬ',
    closeText: 'ПРИМЕНИТЬ',
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    iconHeader: ['ui-icon-arrow-1-w', 'ui-icon-arrow-1-e'],

  });

  $('.ui-icon').addClass('.ui-icon-arrow-1-e').removeClass('ui-icon-circle-triangle-w');
});