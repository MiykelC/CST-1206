// this is synnchronous code

console.log(1);
console.log(2);
console.log(3);

// this is asynchronous code
//first example

function greetMe() {
    console.log("Hi Michael");
}

greetMe();


//execute greetme after given delay

setTimeout(function() {
  console.log("print me after 3 seconds");
}, 3000);

setTimeout(greetMe, 3000);


//Set interval
// set interval is a feature that allows you to execute a function after a given delay

let timer = setInterval(function(){
  console.log("hi i am being printed") ;
},1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("interval is terminated now");
}, 5000);

//setInterval(greetMe, 2000);



//event loops


console.log(1);

setTimeout(()=>{
  console.log(2);
},1000);

console.log(3);

setTimeout(()=>{
  console.log(4);
},0);

console.log(5);

//13542


//CALLBACKS mena as the functions says call me back whenever you want


function a(callback) {
  callback()
}

function greeting () {
  console.log("HALLO MICHAEL");
}

a(greeting);

// PROMISES ***********************

let promise = new Promise(function (resolve, reject) {

}); // PENDING STATE


let promise2 = new Promise(function (resolve, reject) {
  resolve("I am resolved")
}); // FULFILLED STATE


let promise3 = new Promise(function (resolve, reject) {
  reject("I am rejected");
}); // REJECTED STATE


// lets try to use .then() block

let promise4 = new Promise(function (resolve, reject) {
  resolve("Hi I am resolved");
});


// SO what to do with the resolved promise goes inside the then block
promise4.then((response) => {
  console.log(response);
})

// // lets try to use .catch() block

// let promise5 = new Promise(function(resolve, reject) {
//     reject("Hi I am rejected");
// });

// promise5.then((response) => {
//     console.log("INSIDE THEN BLOCK" + response);
// }).catch((error) => {
//         console.log("INSIDE CATCH BLOCK" + error);
// })


// ANOTHER EXAMPLE

// let number = 20;

// let promise6 = new Promise((resolve, reject) => {

//     if (number % 2 === 0) {
//         resolve("Number is divisible by 2");
//     } else {
//         reject("Number is not divisible by 2");
//     }

// });

// promise6.then((response) => {
//     console.log("Inside then block (MEANING RESOLVED)" + response);
// }).catch((error) => {
//        console.log("Inside catch block (MEANING REJECTED)" + error);
// })


// let number2 = 20;



// let promise7 = new Promise((resolve, reject) => {

//     resolve(number2);

// });


// PROMISE CHAIN
// promise7
//   .then((response) => {
//     return response * 2;
//   })
//   .then((response2) => {
//     return response2 * 2;
//   })
//   .then((finalResponse) => {
//     console.log(finalResponse);
//   })

//   .catch((error) => {
//     console.log(error);
//   });


// How you will use promise in real life



/// ASYNC AWAIT

// You have to write async before function
async function callNumber() {
  let output = await getNumber(); // here it won't go to the next line until it executes the await keyword
  console.log(output);
  console.log(20000);

}

// FETCH Is a feature of browser (WEB API"S)

function callAPI() {

}