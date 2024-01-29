const form = document.querySelector('form');
const container = document.querySelector('.container');
container.style.backgroundColor = 'grey';
let bmi;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // use to stop the default action like dont submit by default
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  console.log(weight);
  const result = document.querySelector('#results');
  if (height != '' && !isNaN(height) && weight != '' && !isNaN(weight)) {
    bmi = [weight / (height * height)] * 10000;
    console.log(bmi);
    if (parseInt(bmi) != '' && parseInt(bmi) > 24.9) {
      result.innerHTML = `you are the fat one   because you BMI is   ${bmi}`;
      container.style.backgroundColor = 'red';
    }
    if (parseInt(bmi) != '' && parseInt(bmi) < 18.6) {
      result.innerHTML = `you are to  skinny person because you BMI is   ${bmi}`;
      container.style.backgroundColor = 'brown';
    }
    if (parseInt(bmi) != '' && parseInt(bmi) > 18.6 && parseInt(bmi) < 24.9) {
      result.innerHTML = `<span> You are normal because you BMI is   ${bmi}</span>`;
      container.style.backgroundColor = 'darkgreen';
    }
  } else {
    container.style.backgroundColor = 'black';
    result.innerHTML = `Height ${height} and Weight ${weight} Both should in given formate `;
    result.style.color = 'white';
  }
});
