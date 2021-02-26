var eta = prompt("inserisci la tua età");

// controllo se è valore numerico
// var img = document.createElement("img");
// img.src = "https://originedelmeme.altervista.org/wp-content/uploads/2020/10/leonardo-dicaprio-laughing-and-mocking-meme-32fe0f916dc31d24159d62525b0a4496.jpg";
// var src = document.getElementById("header");
// src.appendChild(img);

if (parseInt(eta) == true) {
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
