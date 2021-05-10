/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/


/**/

//
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

*/

let myImage=document.querySelector('img');
myImage.onclick=function()
{
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/saz.jpg'){
        myImage.setAttribute('src','images/köprü.jpg');
    }else{
            myImage.setAttribute('src','images/saz.jpg')
        }
    
}


let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function SetUserName(){
    let myName=prompt('Please enter your name.. ');
    if(!myName){
        SetUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla is cool,'+ myName;
    }
}


if(!localStorage.getItem('name')){
    SetUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla is cool, '+storedName;
}

myButton.onclick=function(){
    SetUserName();
}