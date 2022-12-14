function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.setSubject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    console.log("Студент отчислен");
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
    if ((this.marks === undefined) || (this.marks.length === 0)){
        return 0;
    } 
    else {
        let sum = 0;
        let count = 0;
        for (let i=0; i < globalThis.marks.length; i++){
            count ++;
            sum += this.marks[i];
        }
       return sum / count;
    
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;

};
