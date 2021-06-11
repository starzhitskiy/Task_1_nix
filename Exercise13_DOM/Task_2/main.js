document.onclick = function (e) {// показывает координаты точки клика
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

let fieldCoords = field.getBoundingClientRect();

let coordinates = [
  [
    fieldCoords.left,
    fieldCoords.top
  ],
  [
    fieldCoords.right,
    fieldCoords.bottom
  ],
  [
    fieldCoords.left + field.clientLeft,
    fieldCoords.top + field.clientTop
  ],
  [
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight
  ]
];

console.log(coordinates);
