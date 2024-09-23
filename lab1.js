//Area of a Triangle
var a,b,c;
a=5;
b=6;
c=7;
const s= (a + b + c)/2;
const A = (s*(s-a)*(s-b)*(s-c))**0.5;
console.log(A)
//MUltiplication and division
function multiplier() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
   var result= document.getElementById("result1").innerHTML =Number(num1)*Number(num2);
    
    
  };
 function divider(){
    
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result= document.getElementById("result2").innerHTML =Number(num1)/Number(num2);
 };

 //creat string


var name = 'course';
var given = 'JavaScript';
result= given+ " " +name;
console.log(result);

