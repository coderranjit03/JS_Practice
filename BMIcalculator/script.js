const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {

    results.innerHTML = `<span>${bmi}</span>`;
  }

  if(bmi<18.6){
    results.innerHTML += `<p>You are underweight</p>`;
  }else if(bmi >= 18.6 && bmi <= 24.9){
    results.innerHTML += `<p>You are healthy</p>`;
  } else if(bmi >= 25 && bmi <= 29.9){
    results.innerHTML += `<p>You are overweight</p>`;
  } else { 
    results.innerHTML += `<p>You are obese</p>`;
  }
});

