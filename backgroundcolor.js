function changeColor() {
  let colors = ['#034732', '#008148', '#C6C013', '#EF8A17', '#EF2917'];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];

  console.log(
    'The random number is: ' +
      random +
      ', the random color is: ' +
      colors[random]
  );
}

function changeText(id) {
  id.innerHTML = 'This Element Text has changed.';
}

function displayDate() {
  document.getElementById('myDiv').innerHTML = Date();
}

document.getElementById('myTime').addEventListener('click', displayTime);
function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;
  if (hours > 12) {
    am = false;
    hours -= 12;
  }

  let currentTime = hours + ':' + currentDate.getMinutes();
  if (am) {
    currentTime += ' AM';
  } else {
    currentTime += ' PM';
  }
  document.getElementById('myDiv').innerHTML = currentTime;
}

function myAge() {
  let age = ageForm.age.value;
  console.log('Input ' + age + ', ' + typeof age);
  document.getElementById('myDiv').innerHTML = age;
  return false;
}
