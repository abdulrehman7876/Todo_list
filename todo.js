const input = document.querySelector("#input");
const addBtn = document.querySelector(".add-btn");
const unList = document.querySelector("#un-List");

let text;
const mainDiv = document.querySelector(".main");

let setTodo = (text)=>{
  const fragment = document.createDocumentFragment();
  // const todoDiv = document.createElement("div");
  // todoDiv.className = "todo-div";
  const elemDiv = unList
  .appendChild(document.createElement("div"));
  elemDiv.className = "elem-div";
  const li = elemDiv.appendChild(document.createElement("li"));
  const btn = elemDiv.appendChild(document.createElement("button"))
  btn.className = "list-btn";
  li.textContent = text;
  btn.textContent = "remove";
  // fragment.appendChild(todoDiv);
  // mainDiv.appendChild(fragment);
  btn.addEventListener("click", (evt)=>{
    // console.log(evt.target.previousElementSibling.innerText);
    removeElment(evt);
  })
}
for (let i = 0; i<localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  if(value){
  setTodo(value);
  }
}

addBtn.addEventListener("click", ()=>{
  text = input.value.trim();
  if(text){ 
    localStorage.setItem(text, text);
    setTodo(text);
    input.value = "";
  }
})

const removeElment = (evt)=>{
  console.log(evt.target.parentElement);
  const removeDiv = evt.target.parentElement;
  const val = evt.target.previousElementSibling.innerText;
  localStorage.removeItem(val);
  removeDiv.remove();
}

