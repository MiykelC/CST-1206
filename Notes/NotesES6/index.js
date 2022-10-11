//console.log(this);

var name = "Michael";

//let obj = {
  //  name: "prabh",
  //  getName: function() {
   //     console.log(this.name);
  //  }
//}

//obj.getName();


// p2 
var user ="michael";
let obj2 = {
    user: "prabh",
    getUserName: () => {
        console.log(this.user);
    }
}

obj2.getUserName();



var city = "montreal";
let student = {
    name: " michael",
    college: "vcc",
    city: "toronto",
    address: {
        city: " vancouver",
        province: "BC",
        getCity:() => {
            console.log(this.city);
        }
    }
}

student.address.getCity();

// hoisting in var keyword

console.log(collegename);

var collegename ="vcc";

// hoisting in FUNCTION KEYWORD

getMyname(); 

function getMyName(){
    console.log("Hey i am michael");
}


