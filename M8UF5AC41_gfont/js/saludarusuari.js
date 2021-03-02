function enviarSalutacio() {
  var nom = document.querySelector("#nom").value;
  var cognom = document.querySelector("#cognom").value;

  var mostrar = document.getElementById("mostrar");
  mostrar.innerHTML = `
    <p>Hola ${nom} ${cognom}, GRÀCIES PER OMPLIR EL FORMULARI </p>
  `;
}
