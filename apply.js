var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  }
};

obj.method.apply({a: 4}, [2, 3]);