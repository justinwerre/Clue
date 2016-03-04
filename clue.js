window.onload = function(){
	var buttons = document.getElementsByClassName("button");

	for(let i = 0; i < buttons.length; i++){
		buttons[i].onclick = toggleSelected;
	}

	function toggleSelected(){
		this.classList.toggle("selected");
	}

	document.getElementById("clear-button").onclick = function(){
		var selected = document.getElementsByClassName("selected");

		console.log(selected);

		while(selected.length > 0){
			selected.item(0).classList.remove("selected");
		}
	}
}