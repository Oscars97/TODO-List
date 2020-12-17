var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName('li');
var icons = document.getElementsByTagName('i');

deleteItem();

for(var i=0; i<items.length;i++){
	items[i].addEventListener('click', (e)=>{
		e.target.classList.toggle('done');
	});
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function inputLength() {
	input = document.querySelector('#userinput').value;
	if (input.length>0) {
		return true;
	}
	return false;
}


function createListElement() {
	var li = document.createElement("li");
	var i = document.createElement("i");
	var div = document.createElement('div');

	li.appendChild(document.createTextNode(input));
	i.classList.add('fas');
	i.classList.add('fa-trash');
	li.appendChild(i);
	div.appendChild(li);
	ul.appendChild(div);
	input.value = "";
	deleteItem();
}



function deleteItem() {
	for(var i=0; i<icons.length;i++){
		icons[i].addEventListener('click', (e)=>{
			console.log('ehere');
			e.target.parentElement.parentElement.remove();
		})
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);