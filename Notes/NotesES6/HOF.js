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

// ************************************

// FOR IN LOOP

let obj = {
    name: "Michael",
    age: 20,
    College: "VCC",
    city:"Vancouver"
}

for (let key in obj){
   console.log(obj[key]);
}

// obj.key wont work because we are searching for the key in the object that does not exist

// **************************************

// FIND FUNCTION


let numericArray = [5, 3, 4, 23, 11, 2];

const foundValue = numericArray.find((num) => {
    if (num === 23) {
        return true;
    }
})

const foundValue2 = numericArray.find((num) => {
    if (num === 100) {
        return true;
    }
})

console.log(foundValue, "FOUND VALUE");
console.log(foundValue2, "FOUND VALUE");



const articles = [
    {
        id: Math.random().toFixed(2),
        title: "Latest Technogies",
        author: "Prabh",
        timeRequired: "2 minutes",
        description: "This is an article for latest technologies for example - BlockChain, IOT"
    },
    {
        id: Math.random().toFixed(2),
        title: "Life in Vancouver",
        author: "Prabh",
        timeRequired: "1 minutes",
        description: "Vancouver is known for its natural beauty and its fun living here!"
    }
]

const findArticle = articles.find((item) => {
    if (item.title === "Life in Vancouver") {
        return true;
    }
})


const findArticleByTime = articles.find((item) => {
    if (item.timeRequired === "2 minutes") {
        return true;
    }
})



console.log(findArticle, "FOUND VALUE");
console.log(findArticleByTime, "FOUND VALUE BY TIME REQUIRED");



// **************************************

// FIND INDEX FUNCTION
const index = articles.findIndex((article) => {
    if (article.title === "Life in Vancouver") {
        return true;
    }
})

console.log(index, "INdex value found");


// **************************************

// SPLICE FUNCTION - Splice method can be used to either add elements or delete elements from the array

let numA = [1, 2, 3, 4, 5];

// Array.splice(starting Index, Number of elements of you want to delete, items you want to add);

numA.splice(0, 2, 20, 40, 60);

console.log(numA);
