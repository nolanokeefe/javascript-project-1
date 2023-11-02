let unit = 'inches';
let radius = prompt('Enter a radius in ' + unit);
let circleArea = Math.PI * radius * radius;

let userRoundPrefrence = prompt('Would you like to round? (y/n)');

if (userRoundPrefrence === 'y' || userRoundPrefrence === 'Y') {
  circleArea = circleArea.toFixed();
}

alert('The area is ' + circleArea + '.');
