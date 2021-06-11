function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == '') return false;

    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  container.style.display = 'block';
  form.elements.text.focus();
}

document.getElementById('show-button').onclick = function () {
  showPrompt("Введите что-нибудь<br>...умное :)",
    function (value) {
      let div = document.createElement('div');
      div.innerHTML = "Вы ввели: " + value;
      document.body.append(div);
    });
};






