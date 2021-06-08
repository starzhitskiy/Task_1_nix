
let ul = document.createElement('ul');
let txt = document.createTextNode("Create List");
document.body.appendChild(txt);
document.body.append(ul);

while (true) {
  let data = prompt("please enter text", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
