let checkboxContainerEl = document.getElementById("checkboxContainer");
checkboxContainerEl.classList.add("checkboxContainer","text-center" ,"p-5");


let inputEl = document.createElement("input");
inputEl.type="checkbox";
inputEl.id="mycheckBox";

checkboxContainerEl.appendChild(inputEl);


let labelEl = document.createElement("label");
labelEl.setAttribute("for", "mycheckBox");
labelEl.classList.add("ml-3")
labelEl.textContent = "click here";
checkboxContainerEl.appendChild(labelEl);