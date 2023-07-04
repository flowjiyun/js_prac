var obj = {
  outer: function () {
    console.log(this);
    var innnerFunc1 = function() {
      console.log(this);
    };
    // 전역 객체 바인딩 위회 방법 2
    // var innnerFunc1 = ()=>{
    //   console.log(this);
    // }
    innnerFunc1();
    
    // 전역 객체 바인딩 우회 방법 1
    var self = this;
    var innnerFunc2 = function() {
      console.log(self);
    };
    innnerFunc2;
  }
};

obj.outer();