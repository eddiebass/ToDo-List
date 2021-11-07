const userId = document.querySelector("#name-el");
const input = document.querySelector("#input-el");
const addBtn = document.querySelector("#add-el");
const list = document.querySelector("#ul-el");
const clearBtn = document.querySelector("#clear-el");
const nameBtn = document.querySelector("#name-btn");
const para = document.createElement("p");
const div = document.querySelector("#div-el");
let listOfPlans = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("listOfPlans"));
if (leadsFromLocalStorage) {
	listOfPlans = leadsFromLocalStorage;
	render();
}

addBtn.addEventListener("click", addPlan);
function addPlan() {
	if (input.value) {
		let value = input.value;
		listOfPlans.push(value);
		input.value = "";
		localStorage.setItem("listOfPlans", JSON.stringify(listOfPlans));
		render();
	} else {
		inputErrorRender();
	}
}

clearBtn.addEventListener("click", function () {
	listOfItems = "";
	list.innerHTML = listOfItems;
	localStorage.clear();
	para.parentNode.replaceChild(div, para);
});

function render() {
	let listOfItems = "";
	for (let i = 0; i < listOfPlans.length; i++) {
		listOfItems += `<li>${listOfPlans[i]}</li>`;
	}
	list.innerHTML = listOfItems;
}

nameBtn.addEventListener("click", function () {
	if (userId.value) {
		let newVal = userId.value;
		localStorage.setItem("name", newVal);
		userId.value = "";
		renderName();
	} else {
		userErrorRender();
	}
});

if (localStorage.name) {
	renderName();
}

function renderName() {
	div.parentNode.replaceChild(para, div);
	para.innerHTML = `Hi <span>${localStorage.name}</span>, you are welcome!`;
}

function userErrorRender() {
	userId.classList.add("justo");
	userId.placeholder = "Please enter a name";
}
function inputErrorRender() {
	input.classList.add("justo");
	input.placeholder = "Please add your weekly plan";
}
