var func = function(a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

var bindFunc1 = func.bind({x:1}, 1, 2, 3, 4);
bindFunc1();

var obj = {
  outer: function () {
    console.log(this);
    var inner = function () {
      console.log(this);
    }.bind(this);
    inner();
  }
};

obj.outer();

var obj2 = {
  logThis: function () {
    console.log(this);
  },
  logThisLater1: function() {
    setTimeout(this.logThis, 500);
  },
  logThisLater2: function () {
    setTimeout(this.logThis.bind(this), 1000);
  }
};

obj2.logThisLater1();
obj2.logThisLater2();