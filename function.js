function a() {} // 함수 선언문

a();

var b = function () {} // (익명) 함수 표현식. 변수명 b가 곧 함수명
b();
var c = function d() {} // 기명 함수 표현식. 변수명 c, 함수명 d
c();
d(); // 외부에서 기명 함수 표현식의 함수명을 호출할 수 없음
