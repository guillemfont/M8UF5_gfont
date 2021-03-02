function contrasenyes() {
  var usuari = document.getElementById("usuari").value;

  var contrasenya1 = document.getElementById("contrasenya1").value;

  var contrasenya2 = document.getElementById("contrasenya2").value;

  if (usuari == "Ibai" && contrasenya1 == "1234" && contrasenya2 == "1234") {
    alert("Inici de sessió amb éxit");
  } else {
        if (usuari == "Ibai" && contrasenya2 == "1234" && contrasenya1 != "1234") {
            alert("Les contrasenyes no coincideixen");
        } else {
                if (usuari == "Ibai" && contrasenya1 == "1234" && contrasenya2 != "1234") {
                    alert("Les contrasenyes no coincideixen");
                } else {
                  alert("Dades de inici de sessió incorrectes")
                }
        }
  }
}
