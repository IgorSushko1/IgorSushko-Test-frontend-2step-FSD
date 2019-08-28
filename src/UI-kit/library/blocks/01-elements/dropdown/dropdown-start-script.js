$(document).ready(() => {
  $('.iqdropdown').iqDropdown({ 
		maxItems: Infinity,
		// min total items
		minItems: 1,
		// text to show on the dropdown
		selectionText: 'item',
		// text to show for multiple items
		textPlural: 'items',
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