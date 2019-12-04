function foo(){
	var elem = document.querySelectorAll(".dropdownCheckboxes")[0];
	elem.classList.toggle("dropdown-show");
	if (document.querySelectorAll(".dropdown-btn-icons")[0]) {
		var icon = document.querySelectorAll(".dropdown-btn-icons")[0];
		if (icon.innerHTML == "keyboard_arrow_up") {icon.innerHTML = "keyboard_arrow_down";}
		else {icon.innerHTML = "keyboard_arrow_up";}
	}

}
if (document.querySelectorAll(".myDropdown007")[0]){
	document.querySelectorAll(".myDropdown007")[0].addEventListener("click", foo);
}
