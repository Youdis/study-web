var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rq-logo2.png') {
      myImage.setAttribute ('src','images/rq-logo.png');
    } else {
      myImage.setAttribute ('src','images/rq-logo2.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Всё о RoyalQuest, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Всё о RoyalQuest, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}