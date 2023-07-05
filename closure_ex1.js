var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

fruits.forEach(function(fruit) {
  var count = 0;
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function () {
    console.log(++count);
    console.log(fruit);
    alert('your choice is' + fruit);
  });
  $ul.appendChild($li);
});
document.body.appendChild($ul);