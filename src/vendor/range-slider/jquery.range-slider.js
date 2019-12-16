$('.slider-range-slider').ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  step: 250,
  postfix: 'â‚½',
});

$('.irs-min').remove();
$('.irs-max').remove();
$('.irs-single').css({
  background: 'white',
  color: 'rgba(31, 32, 65, 0.5)',
  display: 'flex',
  'justify-content': 'flex-end',
  'font-weight': '600',
});

let amountOfMoney;

$('.irs-single').on(() => {
  amountOfMoney = $(".irs-single").text()
});