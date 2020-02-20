/* eslint-disable no-undef */
$(document).ready(() => {
  $('.js-iqdropdown_options').iqDropdown({
    maxItems: 10,
    minItems: 1,
    selectionText: 'item',
    textPlural: 'items',
    textArrayForPlural: [
      ['Спальня', 'Спальни', 'Спален'],
      ['Кровать', 'Кровати', 'Кроватей'],
      ['Ванная комната', 'Ванные комнаты', 'Ванных комнат'],
    ],
    numericLimitArrayForPlural: [0, 1, 4],
    uniteValue: false,
    whichUnite: [0, 1],
    UniteTitle: [
      ['Гость', 'Гостя', 'Гостей'],
    ],
    openingText: '2 спальни, 2 кровати',
  });
});
$(document).ready(() => {
  $('.js-iqdropdown_people').iqDropdown({
    maxItems: 9,
    minItems: 1,
    selectionText: 'item',
    textPlural: 'Гости',
    textArrayForPlural: [
      ['Взрослый', 'Взрослых', 'Взрослых'],
      ['Ребёнок', 'Ребёнка', 'Ребят'],
      ['Младенец', 'Младенца', 'Младенцев'],
    ],
    numericLimitArrayForPlural: [0, 1, 4],
    uniteValue: true,
    whichUnite: [0, 1],
    UniteTitle: [
      ['Гость', 'Гостя', 'Гостей'],
    ],
    openingText: 'Сколько гостей',
  });
});

$(document).ready(() => {
  $('.js-iqdropdown_people_apart').iqDropdown({
    maxItems: 9,
    minItems: 1,
    selectionText: 'item',
    textPlural: 'Дети и младенцы',
    textArrayForPlural: [
      ['Взрослый', 'Взрослых', 'Взрослых'],
      ['Ребонок', 'Ребенка', 'Ребят'],
      ['Младенец', 'Младенца', 'Младенцев'],
    ],
    numericLimitArrayForPlural: [0, 1, 4],
    uniteValue: true,
    whichUnite: [1, 2],
    UniteTitle: [
      ['Ребенок или младенец', 'Детя', 'Детей'],
    ],
    openingText: 'Сколько гостей',
  });
});