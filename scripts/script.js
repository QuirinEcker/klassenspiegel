document.body.onload = function() {
	let inputfields = document.getElementsByClassName("addInputField");
	inputfields[0].value = "";
	inputfields[1].value = "";
	inputfields[2].selectedIndex = 0;
	inputfields[3].value = null;
}

function add() {
	let furmular = document.getElementById("addContent");
	
	furmular.style.display = "table-cell";
	furmular.colSpan = "4";
}

function cancel() {
	let inputfields = document.getElementsByClassName("addInputField");
	let furmular = document.getElementById("addContent");
	
	furmular.style.display = "none";
	inputfields[0].value = "";
	inputfields[1].value = "";
	inputfields[2].selectedIndex = 0;
	inputfields[3].value = null;
}

function submit() {
	let inputfields = document.getElementsByClassName("addInputField");
	let tbody = document.querySelector("tbody");
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	let div1 = document.createElement("div");
	let divKlasse = document.createElement("div");
	let divSchüler = document.createElement("div");
	let divFach= document.createElement("div");
	let divNote = document.createElement("div");
	let entries = [divKlasse, divSchüler, divFach, divNote];
	
	for(let i = 0; i < inputfields.length; i++) {
		entries[i].classList.add("oneSingeEntry");
		entries[i].textContent = inputfields[i].value;
	}
	
	td.classList.add("newEntry")
	td.colSpan = "4";
	
	div1.classList.add("singleEntryContainer")
	
	tr.appendChild(td);
	td.appendChild(div1);
	
	for(let i = 0; i < entries.length; i++) {
		div1.appendChild(entries[i]);
	}
	
	tbody.appendChild(tr);
	
	
	let furmular = document.getElementById("addContent");
	furmular.style.display = "none"
	
	
}