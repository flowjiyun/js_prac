var curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    }
  }
}

var getMasValueWith10 = curry3(Math.max)(10);
console.log(getMasValueWith10(8));
console.log(getMasValueWith10(25));

var getInformation = function (baseUrl) {
  return function (path) {
    return function (id) {
      return fetch(baseUrl + path + '/' + id);
    };
  };
};

//ES6

var getInformation  = baseUrl => path => id => fetch(baseUrl + path + '/' + id);