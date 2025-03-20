const NumberArray =[1,2,3,4,5,67,8,9];

function checknumber(){
let num1 =document.getElementById("Number").value;
let num2 = document.getElementById("result").value;
if (NumberArray.include(num1)){
num2.textcontent = 'Number' +num1+ 'is in the list.';
num2.style.color= 'green'
} else{
    num2.textcontent = 'Number' +num1+ 'is not in the list.'; 
    num2.style.color= 'red'
}
}
