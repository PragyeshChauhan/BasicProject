const form = document.querySelector('form');
const container = document.querySelector('.container');
const result = document.querySelector('#results');
let bmi;
form.addEventListener('submit', function event(e) {
  e.preventDefault();
  // use to stop the default action like dont submit by default
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const userName = document.querySelector('#userName').value
 if(isNaN(height)||isNaN(weight)){
   let isNaNField = isNaN(height)? 'Height' : isNaN(weight) ? 'Weight' : isNaN(userName) ? 'Name' :'';
    messagePrinter(`Please Enter ${isNaNField} In Correct Formate `,'black')
    result.style.color = 'white';
  } else if (height ==='' || userName ==='' || weight === '') {
    messagePrinter(`Please Provide all Information` ,'green')
  } else {
    bmi = [weight / (height * height)] * 10000;
    updateScreen(bmi ,userName);
  }
});

function updateScreen(bmi,You) 
{
  if ( parseInt(bmi) > 24.9) {
    messagePrinter(`${You}  you donate some of your fat  because you BMI is   ${bmi}` ,'red')
  }
  if (parseInt(bmi) < 18.6) {
    messagePrinter(`${You} you need some fat because you BMI is   ${bmi}`,'lightblack')
  }
  if ( parseInt(bmi) > 18.6 && parseInt(bmi) < 24.9) {
    result.innerHTML = `<span> </span>`;
    container.style.backgroundColor = 'darkgreen';
    messagePrinter(`${You} you are fit dear 😍  ${bmi}`,'darkgreen')
  }
}
// function getRandomColor() {
//   var hexaLetter = '0123456789abcdefABCDEF';
//   var color ='#';
//   for (let index = 0; index <6; index++) {
//     color += hexaLetter[Math.floor(Math.random()*22)];  
//   }
//   return color;
// }
// setInterval(function () {
//   container.style.border = '25px solid '+getRandomColor();
// },500)
function messagePrinter(message ,backgroundColor){
  result.innerHTML = message;
  if(backgroundColor){
    container.style.backgroundColor = backgroundColor;
  }
  setTimeout( function reloadScreen(){
      location.reload()
  },8000)
}

