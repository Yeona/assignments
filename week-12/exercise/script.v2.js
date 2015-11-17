// Create an array including the first names of each student in the class

var classMates = ['Sam', 'Sasha', 'Heyla', 'Volha', 'Mayu', 'Myoung', 'Yoshi', 'Mark', 'Jae', 'Kalena'];

var student = {
  studentName: ['Sam', 'Mark'],
  absentToday: true
};

// Student status string
var studentStatus = ' is an interface design student.';

// Display in the console the status of each student,
// using a for loop and one console statement.

//console.log(classMates.length);
//for(var i = 0; classmates.length){}

for (var i = 0; i < classMates.length; i++){
console.log(classMates[i] + studentStatus);
}
