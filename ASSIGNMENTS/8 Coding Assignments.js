function Question1(){
    var numArr = [100,100,100,100,100];

   var sum = numArr.reduce(function(a, b){
       return a + b;
   }, 0);

   console.log(sum); 
}
Question1();

function Question2(){
for (var n=0; n<=10; n++) {
       if (n === 0) {
       }
       else if (n % 2 === 0) {
               console.log(n);
       }
} 
}
Question2();

function question3(){
    const str = 'Crazy';
    const char = 'y';
    if (str.toLowerCase().includes(char.toLowerCase())){
    console.log ("YES")
    }
    else {
        console.log("NO")
    }
    }
    question3();


function factorial(n){
 let answer = 1;
 if (n == 0 || n == 1){
   return answer;
 }else{
   for(var i = n; i >= 1; i--){
     answer = answer * i;
   }
   return answer;
 }  
}
let n = 4;
answer = factorial(n)
console.log(n + " factorial = " + answer);

factorial();

function Question5(){
    var subjects = [['C++', 90], ['Networking', 90], ['Programming', 90], ['Math', 95]];
    var Ave = 0;
    for (var i=0; i < subjects.length; i++) {
           Ave += subjects[i][1];
           var avg = (Ave/subjects.length);
    }
    console.log("AVERAGE: " + (Ave)/subjects.length);
           if (avg > 90){
             console.log("Grade : A");      
             } 
           else if (avg <= 70-90) {
                   console.log("Grade : B"); 
                     } 
           else if (avg <= 50-70) 
                {
                   console.log("Grade : C"); 
           } else if (avg < 60) {
                   console.log("Grade : F"); 
    }
    }
    Question5();




function number6() {
    for(var i=1; i<=7; i++){
           console.log("*".repeat(i));
        }
    }
    number6();
    
    function number7(){
    let n = 7;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < n - i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string); 
    }
    number7();

    function Question8() {
        let str = "auhC leahciM"
        str = [...str].reverse().join("");
        
        console.log(str); 
        }
        Question8();
    