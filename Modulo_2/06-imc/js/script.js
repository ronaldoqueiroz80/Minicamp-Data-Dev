function star() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculaterImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  console.log('Cliquei');
}
star();
