function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

var jiyun = new Student('지윤', 'male', '42');
console.log(jiyun);