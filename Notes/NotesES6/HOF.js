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