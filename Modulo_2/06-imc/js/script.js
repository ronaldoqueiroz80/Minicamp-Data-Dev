function star() {
  console.log('start');

  console.log(calculaterImc(98, 1.78));
  console.log(calculaterImc(90, 1.85));
}

function calculaterImc(weight, height) {
  return weight / (height * height);
}
star();
