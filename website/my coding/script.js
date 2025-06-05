const myButton =document.getElementById("myButton");
const result =document.getElementById("result");
const max = 6;
const min = 1;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random()*max)+min;
    result.textContent=randomNum;
};