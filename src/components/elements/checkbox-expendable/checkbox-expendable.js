function foo(){
	var elem = document.querySelectorAll(".checkbox-expendable__dropdown")[0];
	elem.classList.toggle("checkbox-expendable__dropdown_show");
	if (document.querySelectorAll(".checkbox-expendable__icons")[0]) {
		var icon = document.querySelectorAll(".checkbox-expendable__icons")[0];
		if (icon.innerHTML == "keyboard_arrow_up") {icon.innerHTML = "keyboard_arrow_down";}
		else {icon.innerHTML = "keyboard_arrow_up";}
	}

}
if (document.querySelectorAll(".checkbox-expendable__start")[0]){
	document.querySelectorAll(".checkbox-expendable__start")[0].addEventListener("click", foo);
}
