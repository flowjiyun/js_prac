let userData = {
  signUp: '2021-4-06 12:00:00',
  name: 'Not Set',
  setName:  function(firstName, lastName) {
      this.name = firstName + ' ' + lastName;
  }
}

function getUserName(firstName, lastName, callback) { 
  callback.call(userData, firstName, lastName);
}

getUserName('홍', '길동', userData.setName);

console.log('1: ', userData.name);
console.log('2: ', global.name);