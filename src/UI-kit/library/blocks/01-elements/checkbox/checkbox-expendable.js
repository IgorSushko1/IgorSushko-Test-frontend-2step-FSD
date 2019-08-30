function foo(){
	var elem = document.querySelector("#dropdownCheckboxes");
	elem.classList.toggle("show");
	var icon = document.querySelector("#btn-icons");
	if (icon.innerHTML == "keyboard_arrow_up") {icon.innerHTML = "keyboard_arrow_down";}
	else {icon.innerHTML = "keyboard_arrow_up";}
}
document.getElementById("myDropdown007").addEventListener("click", foo);