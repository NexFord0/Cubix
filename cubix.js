// By NexFord
console.log("By NexFord ");

let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let formatError = "Mauvais format";

function isNumber(number) {
  for (var i = 0; i < number.length; i++) {
    if (!numberArray.includes(number[i])) {
      return false;
    }
  }
  return true;
}

function convert(number) {
  number = document.getElementById('convi').value;

  if (number.length == 0) {
    document.getElementById('result').innerHTML="Champ vide !";
    console.error("Champ vide !");
    return;
  }
  if (!isNumber(number)) {
    document.getElementById('result').innerHTML=formatError;
    console.error("C'est pas un nombre !");
    return;
  }
  if (number.length%3 == 2) {
    document.getElementById('result').innerHTML=formatError;
    console.error("Pas la bonne longeur !");
    return;
  }
  if (number.length%3 == 1 && (number[0] == "8" || number[0] == "9")) {
    document.getElementById('result').innerHTML=formatError;
    console.error("L'opérateur doit être compris entre 0 et 7, pas " + number[0]);
    return;
  }

  var convertNumber;
  var operator = 0;
  if (number.length%3 == 1) {
    operator = number[0];
    number = number.replace(/^./, "");
  }

  if (number.length%3 == 0) {
    var numberSize = number.length/3;
    convertNumber = ((Math.trunc(operator/4)*-2+1)*Math.pow(number.substring(0, numberSize), 3) + (Math.trunc(operator%4/2)*-2+1)*Math.pow(number.substring(numberSize, 2*numberSize), 3) + (Math.trunc(operator%2)*-2+1)*Math.pow(number.substring(2*numberSize, 3*numberSize), 3));
    var calc = (Math.trunc(operator/4)*-2+1)+"*"+number.substring(0, numberSize)+"³" +"+"+ (Math.trunc(operator%4/2)*-2+1)+"*"+number.substring(numberSize, 2*numberSize)+"³" +"+"+ (Math.trunc(operator%2)*-2+1)+"*"+number.substring(2*numberSize, 3*numberSize)+"³";
    var convertNumberFormat = new Intl.NumberFormat().format(convertNumber);
    console.log(convertNumberFormat+" = "+calc);
  }

  document.getElementById('result').innerHTML=convertNumberFormat;
}
