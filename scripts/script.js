let stuedentInfos =  {
	"1AHITM": ["Ria Kreszenz", "Wilhelmine Eckhard", "Melitta Leopold", "Jutta Arend"],
	"1AHIF": ["Mattias Liesa", "Rudolf Amelia", "Georg Susi", "Elli Katja"],
	"3AHITM": ["Niko Philomena", "Nickolaus Sylvester", "Iliana Leberecht", "Jonathan Christian"],
	"5AHIF": ["Lukas Cäcilia", "Noemi Leonie", "Klemens Roger", "Margarete Lilo"]
};

let schoolClasses = ["1AHITM", "1AHIF", "3AHITM", "5AHIF"];


let subjectsInfo = new Array();

subjectsInfo[0] = "Deutsch"
subjectsInfo[1] = "Mathematik"
subjectsInfo[2] = "Englisch"
subjectsInfo[3] = "Programmieren"

let marksInfo = new Array();
marksInfo[0] = 1
marksInfo[1] = 2
marksInfo[2] = 3
marksInfo[3] = 4
marksInfo[4] = 5

let selectedClass;
let selectedStudent;
let selectedSubject;
let selectedMark;

function respondMark() {
	selectedMark = this.innerHTML;
	let marks = document.getElementById("marks");
	
	for(let i = 0; i < marks.children.length; i++) {
		if(marks.children[i] != this) {
			marks.children[i].style.backgroundColor = "white";
			marks.children[i].style.color = "black";
		} else {
			this.style.backgroundColor = "black";
			this.style.color = "white";
		}
	}
}

function respondSubject() {
	selectedSubject = this.innerHTML;
	let marks = document.getElementById("marks");
	let subjects = document.getElementById("subjects");
	
	for(let i = 0; i < subjects.children.length; i++) {
		if(subjects.children[i] != this) {
			subjects.children[i].style.backgroundColor = "white";
			subjects.children[i].style.color = "black";
		} else {
			this.style.backgroundColor = "black";
			this.style.color = "white";
		}
	}
	
	while(marks.firstChild) {
		marks.removeChild(marks.firstChild);
	}
	
	for (let i = 0; i < marksInfo.length; i++) {
		let element = document.createElement("div")
		element.textContent = marksInfo[i];
		element.onclick = respondMark;
		marks.appendChild(element);
	}
}

function respondStudent() {
	selectedStudent = this.innerHTML;
	let subjects = document.getElementById("subjects");
	let students = document.getElementById("students");
	
	for(let i = 0; i < students.children.length; i++) {
		if(students.children[i] != this) {
			students.children[i].style.backgroundColor = "white";
			students.children[i].style.color = "black";
		} else {
			this.style.backgroundColor = "black";
			this.style.color = "white";
		}
	}
	
	while(subjects.firstChild) {
		subjects.removeChild(subjects.firstChild);
	}
	
	for (let i = 0; i < subjectsInfo.length; i++) {
		let element = document.createElement("div")
		element.textContent = subjectsInfo[i];
		element.onclick = respondSubject;
		subjects.appendChild(element);
	}
}

function respondClass() {
	selectedClass = this.innerHTML;
	let students = document.getElementById("students");
	let classes = document.getElementById("classes");
	
	while(students.firstChild) {
		students.removeChild(students.firstChild);
	}

	for(let i = 0; i < classes.children.length; i++) {
		if(classes.children[i] != this) {
			classes.children[i].style.backgroundColor = "white";
			classes.children[i].style.color = "black";
		} else {
			this.style.backgroundColor = "black";
			this.style.color = "white";
		}
	}
	
	for (let i = 0; i < stuedentInfos[selectedClass].length; i++) {
		let element = document.createElement("div")
		element.textContent = stuedentInfos[selectedClass][i];
		element.onclick = respondStudent;
		students.appendChild(element);
	}
}

function add() {
	let furmular = document.getElementById("addContent");
	let classes = document.getElementById("classes");
	let students = document.getElementById("students");
	let subjects = document.getElementById("subjects");
	let marks = document.getElementById("marks");
	
	while(classes.firstChild) {
		classes.removeChild(classes.firstChild);
	}
	
	for(let i = 0; i < schoolClasses.length; i++) {
		let element = document.createElement("div");
		element.onclick = respondClass;
		element.textContent = schoolClasses[i];
		element.classList.add("allclasses")
		classes.appendChild(element);
	}
	
	furmular.style.display = "table-cell";
	furmular.colSpan = "4";
}

function cancel() {
	let inputfields = document.getElementsByClassName("addInputField");
	let furmular = document.getElementById("addContent");
	
	furmular.style.display = "none";
}

function submit() {
	let tbody = document.querySelector("tbody");
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	let div1 = document.createElement("div");
	let divKlasse = document.createElement("div");
	let divSchüler = document.createElement("div");
	let divFach= document.createElement("div");
	let divNote = document.createElement("div");
	let entries = [divKlasse, divSchüler, divFach, divNote];
	let allSelectedValues = [selectedClass, selectedStudent, selectedSubject, selectedMark];
	let classes = document.getElementById("classes");
	let students = document.getElementById("students");
	let subjects = document.getElementById("subjects");
	let marks = document.getElementById("marks");
	let allCatigories = [classes, students, subjects, marks];
	
	for(let i = 0; i < allCatigories.length; i++) {
		while(allCatigories[i].firstChild) {
			allCatigories[i].removeChild(allCatigories[i].firstChild)
		}
	}
	
	for(let i = 0; i < allSelectedValues.length; i++) {
		entries[i].classList.add("oneSingeEntry");
		entries[i].textContent = allSelectedValues[i];
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