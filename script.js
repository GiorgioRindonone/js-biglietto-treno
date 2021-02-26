var eta = prompt("inserisci la tua età");

// controllo se è valore numerico
var img = "";
var src = "";
if (isNaN(eta) == true) {

  // document.getElementById('box').style.background = 'url('+ehh.jpg+')';

  // img = document.createElement("img");
  // img.src = "ehh.jpg";
  // src = document.getElementById("header");
  // src.appendChild(img);
  document.getElementById("box").style.backgroundImage = "url('ehh.jpg')";

  eta = prompt("inserisci la tua età, non fare il biricchino!");

}

var km = prompt("inserisci i chilometri che vuoi percorrere");

var prezzoBigliettokm = 0.21;

var costoBiglietto = km * prezzoBigliettokm;

var bigliettoScontato = "";

// calcolo lo sconto

if (eta > 65) {
  bigliettoScontato = costoBiglietto - (costoBiglietto * 0.40);
} else if (eta < 18){
  bigliettoScontato = costoBiglietto - (costoBiglietto * 0.20);
} else {
  bigliettoScontato = costoBiglietto ;
}
document.getElementById('prezzo-finale').innerHTML = "Dopo aver calcolato minuziosamente la sua età, le proponiamo questa offerta alla modica cifra di: " + costoBiglietto + " €";
