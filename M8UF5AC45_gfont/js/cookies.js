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

function guardarCookies() {
  var nomUsuari = document.getElementById("nomUsuari").value;
  localStorage.setItem("nomDelUsuari", nomUsuari);
  var cognomUsuari = document.getElementById("cognomUsuari").value;
  localStorage.setItem("cognomDelUsuari", cognomUsuari);
  netejar();
}

function esborrarCookies() {
  var nomUsuari = document.getElementById("nomUsuari").value;
  var cognomUsuari = document.getElementById("cognomUsuari").value;
  localStorage.removeItem("nomDelUsuari", nomUsuari);
  localStorage.removeItem("cognomDelUsuari", cognomUsuari);
  netejar();
}

function netejar() {
  var nomDUsuari = document.getElementById("nomUsuari").value = " ";
  var cognomDUsuari = document.getElementById("cognomUsuari").value = " ";
}

function recuperarCookies() {
  var cookie = localStorage.getItem("nomDelUsuari", nomUsuari);
  var nomDUsuari1 = document.getElementById("nomUsuari").value = (cookie);
  var cookie2 = localStorage.getItem("cognomDelUsuari", nomUsuari);
  var nomDUsuari2 = document.getElementById("cognomUsuari").value = (cookie2);
}