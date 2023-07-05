var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  }
}

obj.logValues(4, 5);

[4, 5, 6].forEach(obj.logValues); // 전역 객체 출력