var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // undefined
    var a = 3; // variable shadowing (변수 은닉화)
  }
  inner();
  console.log(a); // 1
}

outer();
console.log(a); // 1