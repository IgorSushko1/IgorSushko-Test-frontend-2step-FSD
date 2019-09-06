function foo(){
	var elem = document.getElementById("dropdownCheckboxes");
	elem.classList.toggle("show");
	if (document.getElementById("btn-icons")) {
		var icon = document.getElementById("btn-icons");
		if (icon.innerHTML == "keyboard_arrow_up") {icon.innerHTML = "keyboard_arrow_down";}
		else {icon.innerHTML = "keyboard_arrow_up";}
	}

}
if (document.getElementById("myDropdown007")){
	document.getElementById("myDropdown007").addEventListener("click", foo);
}
