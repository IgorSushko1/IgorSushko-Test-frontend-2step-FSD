$(document).ready(() => {
  $('.first-iqdropdown').iqDropdown({ 
		maxItems: 10,
		// min total items
		minItems: 1,
		// text to show on the dropdown
		selectionText: 'item',
		// text to show for multiple items
		textPlural: 'items',
		textArrayForPlural: [
			['Спальня', 'Спальни','Спален'],
			['Кровать', 'Кровати','Кроватей'],
			['Ванная комната', 'Ванные комнаты', 'Ванных комнат']],
		numericLimitArrayForPlural: [0, 1, 4],
		uniteValue: false,
		whichUnite: [0,1],
		UniteTitle: [['Гость', 'Гостя', 'Гостей']],
		openingText: "2 кровати, 2 спальни"
		// buttons to increment/decrement
		// controls: {
		// 	position: 'right',
		// 	displayCls: 'iqdropdown-item-display',
		// 	controlsCls: 'iqdropdown-item-controls',
		// 	counterCls: 'counter'
		// },
		// fires when an item quantity changes
		// onChange: (id, count, totalItems) => {},
		// return false to prevent an item decrement
		// beforeDecrement: (id, itemCount) => {},
		// return false to prevent an item increment
		// beforeIncrement: (id, itemCount) => {}
	});
});
$(document).ready(() => {
  $('.second-iqdropdown').iqDropdown({ 
		maxItems: 9,
		// min total items
		minItems: 1,
		// text to show on the dropdown
		selectionText: 'item',
		// text to show for multiple items
		textPlural: 'Гости',
		textArrayForPlural: [
			['Взрослый', 'Взрослых','Взрослых'],
			['Ребёнок', 'Ребёнка','Ребят'],
			['Младенец', 'Младенца', 'Младенцев']],
		numericLimitArrayForPlural: [0, 1, 4],
		uniteValue: true,
		whichUnite: [0,1],
		UniteTitle: [['Гость', 'Гостя', 'Гостей']],
		openingText: "Сколько гостей"
		// buttons to increment/decrement
		// controls: {
		// 	position: 'right',
		// 	displayCls: 'iqdropdown-item-display',
		// 	controlsCls: 'iqdropdown-item-controls',
		// 	counterCls: 'counter'
		// },
		// fires when an item quantity changes
		// onChange: (id, count, totalItems) => {},
		// return false to prevent an item decrement
		// beforeDecrement: (id, itemCount) => {},
		// return false to prevent an item increment
		// beforeIncrement: (id, itemCount) => {}
	});
});
$(document).ready(() => {
  $('.third-iqdropdown').iqDropdown({ 
		maxItems: 9,
		// min total items
		minItems: 1,
		// text to show on the dropdown
		selectionText: 'item',
		// text to show for multiple items
		textPlural: 'Дети и младенцы',
		textArrayForPlural: [
			['Взрослый', 'Взрослых','Взрослых'],
			['Ребонок', 'Ребенка','Ребят'],
			['Младенец', 'Младенца', 'Младенцев']],
		numericLimitArrayForPlural: [0, 1, 4],
		uniteValue: true,
		whichUnite: [1,2],
		UniteTitle: [['Ребенок или младенец', 'Детя', 'Детей']],
		openingText: "Сколько гостей"
		// buttons to increment/decrement
		// controls: {
		// 	position: 'right',
		// 	displayCls: 'iqdropdown-item-display',
		// 	controlsCls: 'iqdropdown-item-controls',
		// 	counterCls: 'counter'
		// },
		// fires when an item quantity changes
		// onChange: (id, count, totalItems) => {},
		// return false to prevent an item decrement
		// beforeDecrement: (id, itemCount) => {},
		// return false to prevent an item increment
		// beforeIncrement: (id, itemCount) => {}
	});
});