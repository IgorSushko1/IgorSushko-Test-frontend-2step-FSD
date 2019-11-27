//# sourceMappingURL=item-quantity-dropdown.min.js.map

(function ($) {
	const defaults = {
		maxItems: Infinity,
		minItems: 0,
		selectionText: 'item',
		textPlural: 'items',
		uniteValue: false,
		whichUnite: [0, 0],
		// uniteTitle: [['nothing', 'still nothing', 'and again nothing']],
		openingText: "Welocme!",
		controls: {
			position: 'right',
			displayCls: 'iqdropdown-content',
			controlsCls: 'iqdropdown-item-controls',
			counterCls: 'counter',
		},
		items: {},
		onChange: () => {},
		beforeDecrement: () => true,
		beforeIncrement: () => true,
	};

	$.fn.iqDropdown = function (options) {
		this.each(function () {
			const $this = $(this);
			const $selection = $this.find('p.iqdropdown-selection').last();
			const $menu = $this.find('div.iqdropdown-menu');
			const $items = $menu.find('div.iqdropdown-menu-option');
			const settings = $.extend(true, {}, defaults, options);
			const $selectsItem = $this.find('p.iqdropdown-item');
			const itemCount = {};
			let totalItems = 0;
			let textForTotal = settings.openingText;

			function getElementsName() {


				const block = $this.find('.iqdropdown-menu-option');

				const childBlock = block.find("span.counter");

				const blockChild = block.find("p.iqdropdown-item");

				const blockArray = blockChild.data();

				let countArray = [];
				countArray.push(childBlock.text().split(""));

				let lengthOfDropdown = settings.textArrayForPlural.length;

				let answerForTitle = [];

				for (let x = 0; x < lengthOfDropdown; x++) {

					let value = countArray;
					let getNamesArray = settings.textArrayForPlural[x];
					for (let y = 0; y < settings.numericLimitArrayForPlural.length; y++) {

						if (value[0][x] > settings.numericLimitArrayForPlural[y]) {
							answerForTitle[x] = getNamesArray[y];
						}
					}
				}

				let uniteValues;

				if (settings.uniteValue) {

					uniteValues = Number(countArray[0][settings.whichUnite[0]]) + Number(countArray[0][settings.whichUnite[1]]);

					for (let x = 0; x < settings.numericLimitArrayForPlural.length; x++) {
						if (uniteValues > settings.numericLimitArrayForPlural[x] && childBlock.text() != "000") {
							textForTotal = "";
							textForTotal = uniteValues + " " + settings.UniteTitle[0][x];
						};
					};
					for (let i = 0; i < answerForTitle.length; i++) {
						if ((i < settings.whichUnite[0] && countArray[0][i] != 0) || (i > settings.whichUnite[1] && countArray[0][i] != 0)) {
							let coma;
							if (uniteValues > 0) {
								coma = ", "
							} else {
								coma = "";
								textForTotal = ""
							};
							textForTotal = textForTotal + coma + countArray[0][i] + " " + answerForTitle[i];
						}
					}

				} else {
					if (childBlock.text() != "000") {
						textForTotal = '';
					}
					for (let i = 0; i < answerForTitle.length; i++) {

						if (countArray[0][i] > 0) {

							if (i == answerForTitle.length - 1) {
								textForTotal += countArray[0][i] + " " + answerForTitle[i];
							} else {
								textForTotal += countArray[0][i] + " " + answerForTitle[i] + ", ";
							}
						}
					}
				}
			}

			function updateDisplay() {
				const usePlural = totalItems !== 1 && settings.textPlural.length > 0;
				const text = usePlural ? settings.textPlural : settings.selectionText;
				// $selection.html(`${totalItems} ${text}`);
				getElementsName();
				// console.log($selectsItem);
				$selection.html(`${textForTotal}`);
			}

			function setItemSettings(id, $item) {
				const minCount = Number($item.data('mincount'));
				const maxCount = Number($item.data('maxcount'));

				settings.items[id] = {
					minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
					maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
				};
			}

			function addControls(id, $item) {
				const $controls = $('<div />').addClass(settings.controls.controlsCls);
				const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement">-</i>
          </button>
        `);
				const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment">+</i>
          </button>
        `);
				const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

				$item.children('div').addClass(settings.controls.displayCls);
				$controls.append($decrementButton, $counter, $incrementButton);

				if (settings.controls.position === 'right') {
					$item.append($controls);
				} else {
					$item.prepend($controls);
				}

				$decrementButton.click((event) => {
					const {
						items,
						minItems,
						beforeDecrement,
						onChange
					} = settings;
					const allowClick = beforeDecrement(id, itemCount);

					if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
						itemCount[id] -= 1;
						totalItems -= 1;
						$counter.html(itemCount[id]);
						updateDisplay();
						onChange(id, itemCount[id], totalItems);
					}

					event.preventDefault();
				});

				$incrementButton.click((event) => {
					const {
						items,
						maxItems,
						beforeIncrement,
						onChange
					} = settings;
					const allowClick = beforeIncrement(id, itemCount);

					if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
						itemCount[id] += 1;
						totalItems += 1;
						$counter.html(itemCount[id]);
						updateDisplay();
						onChange(id, itemCount[id], totalItems);
					}

					event.preventDefault();
				});

				$item.click(event => event.stopPropagation());

				return $item;
			}

			$this.click(() => {
				$this.toggleClass('menu-open');
			});

			$items.each(function () {
				const $item = $(this);
				const id = $item.data('id');
				const defaultCount = Number($item.data('defaultcount') || '0');

				itemCount[id] = defaultCount;
				totalItems += defaultCount;
				setItemSettings(id, $item);
				addControls(id, $item);
			});

			updateDisplay();
		});

		return this;
	};
})(jQuery);