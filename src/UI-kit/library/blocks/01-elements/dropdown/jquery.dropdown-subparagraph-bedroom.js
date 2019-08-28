//# sourceMappingURL=item-quantity-dropdown.min.js.map

(function ($) {
	const defaults = {
		maxItems: Infinity,
		minItems: 0,
		selectionText: 'item',
		textPlural: 'items',
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
			let textForTotal = "Вот они - циферки!! -- ";

			function getElementsName() {

				const block = $this.find('.iqdropdown-menu-option');
				block.css("border", "1px solid red");
				console.log(block);
				const childBlock = block.find("span.counter");
				childBlock.css("border", "1px solid green");

				const blockChild = block.find("p.iqdropdown-item");
				blockChild.css("border", "1px solid yellow");
				const blockArray = blockChild.data();

				console.log(blockArray.numeralMax);
				console.log(blockArray);
				// тк всё выводится через строки то разделяю строку и помещаю её в массив
				let countArray = [];
				countArray.push(childBlock.text().split(""));


				console.log(typeof (childBlock.text()));
				console.log(typeof (countArray));
				console.log(countArray);



				let names = block.data("id");

				console.log("Тип объекта - " + typeof (block));
				console.log("Текст объекта - " + typeof (block));
				console.log("Ключи от объекта - " + Object.keys(block));
				console.log("Что лежит в нулевом объекте - " + block[0]);
				console.log(block[0]);
				const $childOfBlock = block.find("span.counter");
				console.log($childOfBlock.text());
				let getNamesAndValues = '';
				let lengthOfDropdown = settings.textArrayForPlural.length;
				console.log("Длина массива переданного из settings, для того чтобы узнать сколько объектов в dropdown - " + lengthOfDropdown);
				console.log("Массив лексических вариантов существительного в зависимости от числового значения  - " + settings.textArrayForPlural[0][1]);
				console.log("Числа от которых зависит лексический вариант существительного  - " + settings.numericLimitArrayForPlural);
				let answerForTitle = [];
				for (let x=0; x<lengthOfDropdown; x++) {
				// в этом прекрасном цикле необходимо узнать число в поле
				let value = countArray; // value равно массиву чисел счетчика,[0 , 0, 0]
				console.log("value = " + value[0][1]);
				let getNamesArray = settings.textArrayForPlural[x];
				for (let y = 0; y < settings.numericLimitArrayForPlural.length; y++) {
					//  берет число из ячейки и сравнивает его с числом в настройках
					if (value[0][x] >= settings.numericLimitArrayForPlural[y]) {
						//  если сравнение убовлетворяет результату, то надо пойти в ячейку массива*(используя х)
						// и найти в нем склонение существительного
						console.log("getNamesArray = " + getNamesArray[y])
						
						answerForTitle[x] = getNamesArray[y];
						console.log("answerForTitle = " + getNamesArray[y])
						// answerForTitle = answerForTitle[y] + value[x];

					}
				}

				}
				console.log(answerForTitle)

				// этот текст выводит друг за другом текстовое сообщение название "комнаты число"
				// textForTotal = childBlock.text();
				// textForTotal = block.text();

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
            <i class="icon-decrement"></i>
          </button>
        `);
				const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment"></i>
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
}(jQuery));