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

//PROMISE _____________________________________________________

let promise = new Promise((resolve, reject) => {
});

let promise2 = new Promise((resolve, reject) => {
  resolve("I am resolved");
});

let promise3 = new Promise((resolve, reject) => {
  reject("I am rejected");
});






// how to use promise in real life 


function callAPI() {
  
}