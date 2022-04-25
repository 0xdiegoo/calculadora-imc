window.onload = iniciar;

function iniciar() {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", clickbtncalcular);
}

function clickbtncalcular() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  var imc = peso / (altura * altura);
  if (imc > 17 && imc < 18.5) {
    imctype = "Delgadez Aceptable";
  } else {
    if (imc > 16 && imc < 17) {
      imctype = "Delgadez Moderada";
    } else {
      if (imc < 16) {
        imctype = "Delgadez Severa";
      } else {
        if (imc > 18.5 && imc < 25) {
          imctype = "Normal";
        } else {
          if (imc > 25 && imc < 30) {
            imctype = "Sobrepeso";
          } else {
            if (imc > 30 && imc < 35) {
              imctype = "Obesidad tipo 1";
            } else {
              if (imc > 35 && imc < 40) {
                imctype = "Obesidad tipo 2";
              } else {
                imctype = "Obesidad tipo 3";
              }
            }
          }
        }
      }
    }
  }

  document.getElementById("result").innerHTML =
    "Su imc es " + Math.round(imc) + " y es " + imctype;
}
