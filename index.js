"use strict";
const addTask = document.querySelector(".add-task");
const stagedTask = document.querySelector(".task-list");
const inputText = document.getElementById("input-task");
addTask.addEventListener("click", function () {
	if (inputText.value === "") {
		alert("Please enter a task");
	} else {
		stagedTask.insertAdjacentHTML(
			"afterbegin",
			`<ul class="task">
     <li class="text"></li>
     <li class="icons"><i class="fa-solid fa-check"></i>
     <i class="fa-solid fa-trash-can"></i></li>
    </ul>`
		);
		const text = document.querySelector(".text");
		text.innerText = `${inputText.value}`;
		inputText.value = "";
	}
	const done = document.querySelector(".fa-check");
	done.addEventListener("click", function () {
		done.parentElement.previousElementSibling.style.textDecoration =
			"line-through";
	});
	const del = document.querySelector(".fa-trash-can");
	del.addEventListener("click", function (e) {
		let target = e.target;
		target.parentElement.parentElement.remove();
	});
});
