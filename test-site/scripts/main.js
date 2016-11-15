

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'test-site/images/firefox.jpg') {
      myImage.setAttribute ('src','test-site/images/firefox1.png');
    } else {
      myImage.setAttribute ('src','test-site/images/firefox.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name5',myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name5')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name5');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}