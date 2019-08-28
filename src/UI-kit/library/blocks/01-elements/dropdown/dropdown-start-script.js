$(document).ready(() => {
  $('.first-iqdropdown').iqDropdown({ 
		maxItems: Infinity,
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
		numericLimitArrayForPlural: [0, 2, 5]
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
		maxItems: Infinity,
		// min total items
		minItems: 1,
		// text to show on the dropdown
		selectionText: 'item',
		// text to show for multiple items
		textPlural: 'items',
		textArrayForPlural: [
			['Взрослый', 'Взрослых','Взрослых'],
			['Ребонок', 'Ребенка','Ребят'],
			['Младенец', 'Младенца', 'Младенцев']],
		numericLimitArrayForPlural: [0, 2, 5]
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