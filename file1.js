var postmark ="Helo World";
console.log(postmark);

//practice for javascript

let memory ="Helo World";
console.log(memory);

//use in datatype

var x ="Helo ritesh";
    x ="smit";
    x ="vinit";
    x ="suraj";
    x ="sam"

console.log(x); 

//string operation

let mejaor1 ="number are boolean";
v = mejaor1.length;

console.log(v);

//string trim()

var late ="      helo param   ";
v =late.trim();

console.log(v);

//string slice

var nature_war ="she is good";
v =nature_war.slice(8);

console.log(v);

//return value in slice

let senter ="my name is tarul";
v = senter.slice(-2);

console.log(v);

//Math.random use

var latee =Math.random();
 console.log(latee);

 //Math.random() , Math.Floor()

 var smarth =Math.random();
 F =Math.floor(smarth);

 console.log(F);

 //operator

 var a=2;
 var b=3;

 var c=a+b;
 console.log(c);


 //*operator

 var v=4;
 var w=5;

 var z=v*w;
 console.log(z);

 //if else small program
 const hour = new Date().getHours(); 

 if (hour >15){
    calculate ="good day";
 }else{
    calculate ="good Evening";
 }

 console.log(calculate);

 //example

 const time = new Date().getHours();
let greeting;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

//calculate value

var Lovescore =Math.random()*100;
console.log(Lovescore);

//prompt

// array

var gustlist =["purva","surya","mnsavi","sita","gita"];
    gustlist =["purva","surya","mnsavi"];

console.log(gustlist[0]);

//length of array

var gustlist =["purva","surya","mnsavi","sita","gita"];

console.log(gustlist.length);

//arrau use in prompt

var gustlist =["purva","surya","mnsavi","sita","gita"];
console.log(gustlist.length);

//array
var gustlist =["purva","surya","mnsavi","sita","gita"];

gustlist.push("one","teo");
console.log(gustlist);


//array count push

var output =[];
var count =1;

function beadagg(){

  output.push(count);
  count++;
  console.log(output); beadagg()
}

//using array
var output =[];
var count =1;

function VarnMur(){

  while (count <=100){

  if(count % 3==0){
     output.push("Varn");
  }else{
    output.push(count);
  }
  count++;
  console.log(output);
}
}