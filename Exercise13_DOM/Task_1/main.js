
let div = document.createElement('div');
div.innerHTML = 'Уведомление находится справа';
document.body.append(div);

let p = document.createElement('p');
p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum eveniet, quibusdam blanditiis vero in similique eaque corrupti et omnis. Corporis quis voluptates aut voluptas eos delectus quo hic aspernatur dolorum iure error tenetur maxime magni assumenda consectetur perferendis, officia debitis, nisi dolorem nobis magnam doloremque. Impedit, maiores inventore. Expedita.";
document.body.append(p);

let button = document.createElement('button');
button.innerHTML = 'Hello 12';
document.body.append(button);

setTimeout(() => button.remove(),1500);

