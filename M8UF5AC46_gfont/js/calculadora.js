//Funció que s'executa al iniciar la pàgina:
function iniciar() {
  //Variables on es guarden els números de la simbols de la calculadora:
  var resultat = document.querySelector(".resultat");
  var tornar = document.getElementById("tornar");
  var divisio = document.getElementById("divisio");
  var multiplicacio = document.getElementById("multiplicacio");
  var sumar = document.getElementById("suma");
  var restar = document.getElementById("resta");
  var igual = document.getElementById("igual");

  //Variables on es guarden els números de la calculadora:
  var un = document.getElementById("un");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var quatre = document.getElementById("quatre");
  var cinc = document.getElementById("cinc");
  var sis = document.getElementById("sis");
  var set = document.getElementById("set");
  var vuit = document.getElementById("vuit");
  var nou = document.getElementById("nou");

  //Variables amb les que es fan les operacions:
  var operandoa;
  var operandob;
  var operacion;

  //Events que succeeixen quan es pren un botó de la calculadora:
  un.onclick = function (e) {
    resultat.textContent = resultat.textContent + "1";
  };

  dos.onclick = function (e) {
    resultat.textContent = resultat.textContent + "2";
  };

  tres.onclick = function (e) {
    resultat.textContent = resultat.textContent + "3";
  };

  quatre.onclick = function (e) {
    resultat.textContent = resultat.textContent + "4";
  };

  cinc.onclick = function (e) {
    resultat.textContent = resultat.textContent + "5";
  };

  sis.onclick = function (e) {
    resultat.textContent = resultat.textContent + "6";
  };

  set.onclick = function (e) {
    resultat.textContent = resultat.textContent + "7";
  };

  vuit.onclick = function (e) {
    resultat.textContent = resultat.textContent + "8";
  };

  nou.onclick = function (e) {
    resultat.textContent = resultat.textContent + "9";
  };

  cero.onclick = function (e) {
    resultat.textContent = resultat.textContent + "0";
  };

  //Funcions de la calculadora;
  function netejar() {
    resultat.textContent = "";
  }

  function resetejar() {
    resultat.textContent = "";
    primer = 0;
    segon = 0;
    operacio = "";
  }

  function resoldre() {
    var res = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resultat.textContent = res;
  }

  //Operacions
  tornar.onclick = function (e) {
    resetejar();
  };

  sumar.onclick = function (e) {
    operandoa = resultat.textContent;
    operacion = "+";
    netejar();
  };

  restar.onclick = function (e) {
    operandoa = resultat.textContent;
    operacion = "-";
    netejar();
  };

  multiplicacio.onclick = function (e) {
    operandoa = resultat.textContent;
    operacion = "*";
    netejar();
  };

  divisio.onclick = function (e) {
    operandoa = resultat.textContent;
    operacion = "/";
    netejar();
  };

  igual.onclick = function (e) {
    operandob = resultat.textContent;
    resoldre();
  };
}
