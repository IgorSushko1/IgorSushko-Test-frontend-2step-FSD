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
				// let selectsItem = $this.find('span.counter');
				// let selectsItem = $('span.counter');
			// $this.find('.iqdropdown-menu-option').css("border", "1px solid red"); вот эта фигня работает
			const block = $this.find('.iqdropdown-menu-option');
			block.css("border", "1px solid red");
			const childBlock = block.find("span.counter");
			childBlock.css("border", "1px solid green");
			textForTotal = childBlock.text();
			//textForTotal = "";
			// alert(selectsItem.text());
				// for (let a in selectsItem) {
				// // 	textForTotal += a;
				// 	console.log(a);
				// };
			}

      function updateDisplay () {
        const usePlural = totalItems !== 1 && settings.textPlural.length > 0;
        const text = usePlural ? settings.textPlural : settings.selectionText;
				// $selection.html(`${totalItems} ${text}`);
				getElementsName();
				// console.log($selectsItem);
				$selection.html(`${textForTotal} ${text}`);
      }

      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function addControls (id, $item) {
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
          const { items, minItems, beforeDecrement, onChange } = settings;
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
          const { items, maxItems, beforeIncrement, onChange } = settings;
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
