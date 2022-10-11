// call back functiom
// when a function is passed as a pramaeter/ argument to another function

function greet(fn) {

    // as the definition says call me back
fn();
}

function myName() {
    console.log("Hello Michael")
}

greet(myName);// hello michael





// for each loop 

let array = ["M","I","Y","K","E","L"];

// here item ----> array[i], and index ----> i

array.forEach(function(item, index){
console.log(item);
console.log(index, "index value");
})

function printValue( item, index){
    console.log(item, "Array[I] Value");
    console.log(index, "INDEX VALUE");
}


// ************************************************************

//map function 
// example 1


let numArray = [1,2,3,4,5];

let newArray = numArray.map(function(item,index){
    return item *2
})

console.log(numArray, "Original Array")
console.log(newArray, "New Array")

// NOTE- WHEN YOU ARE USING THE MAP FUNCTION, the lenght of the array mains the same

//example 2

// CHANGE GRADE VALUE TO PASS OR FAIL


let studentmarks = [
    {
        name: "Michael",
        rollNumber: 100,
        grade: 90
    },
    {
        name: "Daniel",
        rollNumber: 101,
        grade: 42
    },
    {
        name: "Michael",
        rollNumber: 103,
        grade: 70
    }
]

let modifiedArray = studentmarks.map((student)=>{
    if (student.grade > 50){
        student.grade ="PASS"
    } else {
        student.grade = "FAIL"
    }
    return student;
})

console.log(modifiedArray);

// ************************************************************

//FILTER function 

let num2array =[1,2,3,4,5,6];
let new2array = num2array.filter((num)=> {
    if (num % 2==0){
        return true;
    }
    
})

console.log(num2array, "ORIGINAL ARRAY");
console.log(new2array, "MODIFIED ARRAY");

let passedStudent= modifiedArray.filter(function(student){
    if (student.grade === "PASS"){
        return true;
    }
})

console.log(passedStudent)

// ************************************************************

//REDUCE function 

let sum = 0;
let array1 = [1,20,3,4,5]
for (let i=0; i < Array.length ; i++){
    sum = sum + array1[i]
}

console.log(sum);

let sumofArray = array1.reduce((accumulator, currentvalue)=>{
return accumulator + currentvalue
}, 0)

console.log(sumofArray)
// accumulator ---> SUM
// currentValue ---> array[i]
// initialValue ---> 0


// Maximum inside the array
// You can use for loop
let max = -Infinity;
for (let i = 0 ; i< array1.length; i++) {
    if (array1[i] > max) {
        max = array1[i];
    }
}

console.log(max);


// You can reduce just like the above example
let maxValue = array1.reduce((accumulator, currentValue) => {
   return accumulator >  currentValue ? accumulator : currentValue
}, -Infinity)

console.log(maxValue);