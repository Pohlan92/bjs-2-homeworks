function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  let count = 0;
  let result;
  if (this.marks !== undefined && this.marks.length > 0) {
    for (let mark of this.marks) {
      sum += mark;
      count += 1;
    }
    result = sum / count;
  } else {
    result = 0;
  }
  return result;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
