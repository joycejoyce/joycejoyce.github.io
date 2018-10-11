/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1024_1.jpg') {
      myImage.setAttribute ('src','images/1024_2.jpg');
    } else {
      myImage.setAttribute ('src','images/1024_1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}