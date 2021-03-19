//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- Il prezzo del biglietto è definito in base ai km (0.21 € al km).
//- Va applicato uno sconto del 20% per i minorenni e va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


//Chiedo il numero di chilometri e l'età con 2 prompt
var km = prompt("Inserisci numero di chilometri da percorrere:");

var eta = prompt("Inserisci la tua età: ");

//Calcolo il prezzo del biglietto
var prezzo = km * 0.21;

//Calcolo lo sconto
var sconto;

if( eta < 18 ) {
    sconto = prezzo * 20 / 100;
} else if(eta > 65) {
    sconto = prezzo * 40 /100;
} else {
    sconto = 0;
}


//Applico lo sconto
var prezzoFinale = prezzo - sconto;

//output prezzo biglietto

var output = prezzoFinale.toFixed(2);
alert(output);