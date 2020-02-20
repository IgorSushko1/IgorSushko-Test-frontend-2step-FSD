function checkboxExpendable() {
  const elem = document.querySelectorAll('.js-checkbox-expendable_hiden')[0];
  elem.classList.toggle('checkbox-expendable__visible');
  if (document.querySelectorAll('.checkbox-expendable__icons')[0]) {
    const icon = document.querySelectorAll('.checkbox-expendable__icons')[0];
    if (icon.innerHTML === 'keyboard_arrow_up') {
      icon.innerHTML = 'keyboard_arrow_down';
    } else {
      icon.innerHTML = 'keyboard_arrow_up';
    }
  }
}
if (document.querySelectorAll('.js-checkbox-expendable')[0]) {
  document.querySelectorAll('.js-checkbox-expendable')[0].addEventListener('click', checkboxExpendable);
}