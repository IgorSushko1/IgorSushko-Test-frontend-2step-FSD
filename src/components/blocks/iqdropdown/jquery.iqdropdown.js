/* eslint-disable eqeqeq */
/* eslint-disable func-names */
(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    uniteValue: false,
    whichUnite: [0, 0],
    openingText: 'Welocme!',
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
      // const $selection = $this.find('p.iqdropdown-selection').last();
      // const $selection = $this.find('.iqdropdown-selection').last();

      const $menu = $this.find('div.iqdropdown-menu');
      const $items = $menu.find('div.iqdropdown-menu-option');
      const settings = $.extend(true, {}, defaults, options);
      const $selection = $this.find('.iqdropdown-selection').last();
      $selection.text(settings.openingText);
      const itemCount = {};
      let totalItems = 0;
      let answer = [];

      function getElementsName() {
        answer = [];
        const block = $this.find('.iqdropdown-menu-option');

        const counterOfStuffNumber = block.find('span.counter');

        let amountOfStuff = [];
        amountOfStuff.push(counterOfStuffNumber.text().split(''));

        const lengthOfStuff = settings.textArrayForPlural.length;

        let declensionForAnswer = [];

        for (let x = 0; x < lengthOfStuff; x++) {
          const value = amountOfStuff;
          const getNamesArray = settings.textArrayForPlural[x];
          for (let y = 0; y < settings.numericLimitArrayForPlural.length; y++) {
            if (value[0][x] > settings.numericLimitArrayForPlural[y]) {
              declensionForAnswer[x] = getNamesArray[y];
            }
          }
        }

        const coma = ', ';

        if (settings.uniteValue && (counterOfStuffNumber.text() != '000')) {
          let unitedAnswer;

          const firstTerm = Number(amountOfStuff[0][settings.whichUnite[0]]);
          const secondTerm = Number(amountOfStuff[0][settings.whichUnite[1]]);

          const uniteValues = firstTerm + secondTerm;

          const numeralOfDeclension = settings.numericLimitArrayForPlural;
          const lengthOfDeclensionArray = settings.numericLimitArrayForPlural.length;

          for (let x = 0; x < lengthOfDeclensionArray; x++) {
            if (uniteValues > numeralOfDeclension[x] && counterOfStuffNumber.text() != '000') {
              unitedAnswer = `${uniteValues} ${settings.UniteTitle[0][x]}`;
            }
          }

          for (let i = 0; i < declensionForAnswer.length; i++) {

            const positionOfFirstUnitedStuff = settings.whichUnite[0];
            const positionOfSecondUnitedStuff = settings.whichUnite[1];
            const isItNotNullOfStuff = (amountOfStuff[0][i] != 0);


            if ((i == positionOfFirstUnitedStuff) && isItNotNullOfStuff) {
              answer.push(unitedAnswer);
              i += 1;
            }

            if (i < positionOfFirstUnitedStuff && isItNotNullOfStuff) {
              answer.push(`${amountOfStuff[0][i]} ${declensionForAnswer[i]}`);
              answer.push(coma);
            }
            if (i > positionOfSecondUnitedStuff && isItNotNullOfStuff) {
              if (unitedAnswer) {
                answer.push(coma);
              }
              answer.push(`${amountOfStuff[0][i]} ${declensionForAnswer[i]}`);
            }

          }

        } else if (counterOfStuffNumber.text() != '000') {
          for (let i = 0; i < declensionForAnswer.length; i++) {
            if (amountOfStuff[0][i] > 0) {
              if (i == (declensionForAnswer.length - 1)) {
                answer.push(`${amountOfStuff[0][i]} ${declensionForAnswer[i]}`);
              } else {
                answer.push(`${amountOfStuff[0][i]} ${declensionForAnswer[i]}${coma}`);
              }
            }
          }
        }
      }

      function updateDisplay() {
        let mainAnswer = settings.openingText;

        getElementsName();
        if (answer.length != 0) {
          mainAnswer = answer.join('');
          $selection.text(`${mainAnswer}`);
        } else {
          // $('.iqdropdown-selection').textContent = mainAnswer;
        }
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
            onChange,
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
            onChange,
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

        $item.click((event) => event.stopPropagation());

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