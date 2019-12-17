$('.slider-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  step: 250,
  postfix: '₽',
});

$('.irs-min').remove();
$('.irs-max').remove();
$('.irs-single').css({
  background: 'white',
  color: 'rgba(31, 32, 65, 0.5)',
  display: 'flex',
  'justify-content': 'flex-end',
  'font-weight': '600',
  'margin-top': ' 1.4rem',
  'font-size': '0.75rem',
  'letter-spacing': '-0.02rem',
});

let amountOfMoney;

$('.irs-single').on(() => {
  amountOfMoney = $(".irs-single").text()
});