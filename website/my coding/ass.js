/*
const inputYourAge = document.getElementById("inputYourAge");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
let age;

submitButton.onclick = function (){

    age =inputYourAge.value;
    age =Number(age);
    

    if( age >100){
    result.textContent = `You are TOO old!`
}

 
else if( age >= 18 ){
    result.textContent= `You can drive`
}

else if (age === 0){
    result.textContent=`You  were just born`
}

else{
    result.textContent = `You CANNOT drive!`
}
}
 */
    
/*



const textBox =document.getElementById('textBox')
const button=document.getElementById('button')
const paragraph =document.getElementById('paragraph')

let grade;

button.onclick = function (){

    grade = textBox.value;
    grade = Number(grade);

    switch(true){
        case grade >= 101:paragraph.textContent = `Your Score is INVALID`
        break; 

        case grade >= 80: paragraph.textContent= `You have (A)`
        break;

        case grade >= 70: paragraph.textContent= `You have (B)`
        break; 

        case grade >= 60:paragraph.textContent = `You have (C)`
        break; 

        case grade >= 50:paragraph.textContent = `You have (D)`
        break; 
           
        default: paragraph.textContent = 'You Have (F)'
}
} 

let mylogin = document.getElementById('mylogin')
const myUsername = document.getElementById('myUsername')
const myPassword = document.getElementById('myPassword')
const submit = document.getElementById("submitBotton")

const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')

let loggedIn;
let username;
let Password;

mylogin.onclick = function(){
mylogin = false
   wh (loggedIn){
        u='Enter Your Username and Password'

    }
}  */

    /*
const minNum = 1;
const maxNum = 100;
let answer = Math.floor( Math.random() * (maxNum - minNum +1))

let attempt = 0
let guess;
let running = true

while(running){

    guess = window.prompt (`Guess a number between ${minNum}-${maxNum}` );
     guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter a valid NUMBER`)
     }

     else if (guess > maxNum || guess < minNum ){
        window.alert (`Enter a num between ${minNum}-${maxNum}`);
     }
     else{ attempt++
        if (guess > answer){
            window.alert(`TOO HIGH! TRY AGAIN`);
        }
        else if (guess < answer){
          window.alert(`TOO LOW! TRY AGAIN`);
        }
        else {  
            window.alert (`You guessed RIGHT ${answer},You have ${attempt}attempt`);
            running = false;
        }
     }
    
}      */

    const myInput = document.getElementById('myInput');
    const celsiusToFah = document.getElementById('celsiusToFah');
    const fahToCel = document.getElementById('fahToCel');
    const mySubmit = document.getElementById('mySubmit');
    const result = document.getElementById('result');
    let temp;

     function convert(){
        if(celsiusToFah.checked){
            temp =Number (myInput.value) 
           temp = temp* 9/5+32; 
           result.textContent =temp +"sF"     
        }
        else if(fahToCel.checked){
           
        }
        else{
        result.textContent = 'You have not selected a unit'
    }


     }

    