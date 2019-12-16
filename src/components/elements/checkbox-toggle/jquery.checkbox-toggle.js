/* eslint-disable no-undef */
$('.checkbox-toggle__text').click(() => {
  if ($('.checkbox-toggle__input').is(':checked')) {
    $('.checkbox-toggle__background_gradient').css('background', 'linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)');
    $('.checkbox-toggle__circle').css({
      left: '4px',
      background: 'linear-gradient(180deg, rgba(31, 32, 65, 0.25), rgba(31, 32, 65, 0.25)',
    });
  } else {
    $('.checkbox-toggle__background_gradient').css('background', 'linear-gradient(180deg, #BC9CFF, #8BA4F9)');
    $('.checkbox-toggle__circle').css({
      left: '22px',
      background: 'linear-gradient(180deg, #BC9CFF, #8BA4F9)',
    });
  }
});