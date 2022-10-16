var highest = 0;
var names = "";
var highestmarks = "";

const students = [
  
  {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95]
  },
  {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60]
  },
  {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20]
  },
  {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99]
  }
  
];

function studentWithHighestMarks(array = []) {
  array.filter((students) => {
    if (students.marks) {
      let allMarks = students.marks.reduce((accumulator, currentValue) => { return accumulator + currentValue;}, 0)
      if (highest < allMarks) {
        names = students.name
        highest = allMarks
        highestmarks = ("The highest among the students is " + names)
     }
   }})
  return highestmarks
}
console.log(studentWithHighestMarks(students));


const arr1 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];
const arr2 = [4, 5, 2, 1, 0];
function missingNumber(array, n) {

const missing = (array) => {
  let sumofArray = array.reduce((accumulator, currentValue) => { return accumulator + currentValue; },0)
  let { length: num } = array
  let newSumofArray = (num * (num + 1)) / 2
  return (newSumofArray - sumofArray)
}
console.log(missing(array))

}
missingNumber(arr2);
missingNumber(arr1);




