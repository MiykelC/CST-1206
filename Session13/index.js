
// Rest operator


function multiply (num1, num2) {
  return num1 * num2;
}

function multiplyWithRest (...nums) {
  let total = 1;
  for (let i = 0; i < nums.length; i++) {
   total = total * nums[i];
  }
  return total;
}

function sumWithRest (...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
   total = total + nums[i];
  }
  return total;
}


let finalMultipliedValue = multiplyWithRest(1, 2, 3, 4 );

let finalSumValue = sumWithRest(1, 2, 3, 4 );


console.log(finalSumValue);
console.log (finalMultipliedValue);


function averageSum(type, ...typelist) {
  let length = typelist.length;
  // let total = 0;


  let total = sumWithRest(...typelist);
  // for (let i = 0; i < typelist.length; i++) {
  //   total = total + typelist[i];
  // }

  let average = total / length;
  console.log(`We are calculating the average of ${type} and the average is ${average}`);
}

averageSum("Marks", 80, 90 ,100);


function greeting(...values){
  let finalOutput = "";
  for (let i = 0; i < values.length; i++) {
    finalOutput = finalOutput + " " + values[i];
  }
  console.log (finalOutput);

}

greeting("Hello", "How", "Are", "You");


// Spread operator 


let array1 = [1, 2, 3, 4, 5];

let array2 = [6, 7, 8, 9, 10];
//concat
// let combinedArraywithconcat = array1.concat(array2);

//Spread
let combinedArray = [...array1, ...array2];

console.log(combinedArray);


let student = {
  name: "Michael",
  age: 20,
  email: "Michael@vcc.com"
}


let studentwithVCCCollege = {
  ...student,
  college: "VCC",
  //overides data above
  // name: "mike"
}


console.log(studentwithVCCCollege);


console.log(Math.max(1,2,3,4)); // returns maximum val

let findMaxInArray = [20,40,50,100];

console.log(Math.max(...findMaxInArray));


// Destructuring


let movieObject = {
  title: "Pirates of the caribbean",
  actor: "Johnny Depp",
  actress: "Amber Heard",
}

let titleMovie = movieObject.title;
let titleMovie2 = movieObject["title"];

let {title, actor} = movieObject;
let {age = 40} = movieObject;

console.log(title, actor, age);

// destructing in arrays


let fruitList = ["Apple", "Orange", "Banana", "Mango"];

let [x, two, third, fourth, fifth = "DragonFruit"] = fruitList;

console.log(x, two, fifth);