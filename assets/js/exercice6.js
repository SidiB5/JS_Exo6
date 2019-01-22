function getSidi(){
  var regexp = new RegExp (/[1-9]/)
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;

  if(regexp.test(firstNumber) & regexp.test(secondNumber)){
    var result = firstNumber % secondNumber;
    alert(result)
  }else {
    alert('Veuillez un nombre supèrieur à 0')
  }
}
