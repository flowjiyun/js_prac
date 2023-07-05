var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  }
  
  return inner;
}

var outer2 = outer(); // outer 실행커텍스트가 끝나는 순간 
console.log(outer2());
console.log(outer2());

// 콜백 함수를 통해 외부 객체인 window 메서드에 내부 함수 전달
(function () {
  var a = 0;
  var intervalid = null;
  var inner = function () {
    if (++a >= 10) {
        clearInterval(intervalid);
    }
    console.log(a);
  };
  intervalid = setInterval(inner, 1000);
})();

(function () {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';
  button.addEventListener('click', function () {
    console.log(++count, 'times clicked');
  });
  document.body.appendChild(button);
})();