// 콜백 함수 내부에서 외부 데이터를 사용하고 싶을 때
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');


var alertFruitBuilder = function (fruit) {
  return function () {
    alert('your choice is ' + fruit);
  }
};

fruits.forEach(function(fruit) {
  var count = 0;
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);