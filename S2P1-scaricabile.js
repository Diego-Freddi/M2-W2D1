//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/


let num1 = 10
let num2 = 12

if (num1 > num2) {
  console.log(num1 + " è più grande di " + num2)
}
else if (num1 === num2)
  console.log("i numeri sono uguali")
else {
  console.log(num2 + " è più grande di " + num1)
}

//---------- Output sul Browser ---------------

function funzione() {

  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let risultato;
  let divVuoto = document.getElementById('divVuoto');

  if (num1 > num2) {
    risultato = num1;
  }
  else if (num1 === num2)
    risultato = "i numeri sono uguali"
  else {
    risultato = num2;
  }
  let output = "<h1> Il numero più grande è: <br>" + risultato + "</h1>";


  divVuoto.innerHTML = output;

}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 17
if (num < 5) {
  console.log("Tiny");
}
else if (num > 4 && num < 10) {
  console.log("small");
}
else if (num > 9 && num < 15) {
  console.log("Medium");
}
else if (num > 14 && num < 20) {
  console.log("Large");
}
else {
  console.log("Huge")
}

//---------- Output sul Browser ---------------

function ob2() {
  let ob2Num = parseInt(document.getElementById("ob2-num").value);
  let ob2Risultato;
  let ob2Vuoto = document.getElementById("ob2-vuoto");

  if (ob2Num < 5) {
    ob2Risultato = "Tiny";
  }
  else if (ob2Num > 4 && ob2Num < 10) {
    ob2Risultato = "small";
  }
  else if (ob2Num > 9 && ob2Num < 15) {
    ob2Risultato = "Medium";
  }
  else if (ob2Num > 14 && ob2Num < 20) {
    ob2Risultato = "Large";
  }
  else if (ob2Num >= 20) {
    ob2Risultato = "Huge"
  }
  else {
    ob2Risultato = NaN
  }

  let ob2Output = "<h1> Questo numero è: <br>" + ob2Risultato + "</h1>"
  ob2Vuoto.innerHTML = ob2Output

}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let contatore = 0; contatore < 11; contatore = contatore + 1) {
  if (contatore === 3 || contatore === 8) {
    continue;
  }
  console.log(contatore)
}

//---------- Output sul Browser (modo Tommaso) ---------------

function ob3() {
  let ob3Risultato = "";
  let ob3Vuoto = document.getElementById("ob3-vuoto");

  for (let contatore = 0; contatore < 11; contatore = contatore + 1) {
    if (contatore === 3 || contatore === 8) {
      continue;
    }
    ob3Risultato += "<div>" + contatore + "</div>";
  }

  let ob3Output = ob3Risultato
  ob3Vuoto.innerHTML = ob3Output
}

//---------- Output sul Browser (modo Daniele) ---------------

// function ob3() {

//   for (let contatore = 0; contatore < 11; contatore = contatore + 1) {
//     if (contatore === 3 || contatore === 8) {
//       continue;
//     }
//     else {
//       let ob3Vuoto2 = document.getElementById("ob3-vuoto2");
//       let nuovoLi = document.createElement ("li")
//       nuovoLi.textContent = contatore
//       ob3Vuoto2.appendChild (nuovoLi)
//     }
//   }
// }


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let contatore = 0; contatore < 16; contatore = contatore + 1) {
  if (contatore % 2 === 0) {
    console.log(contatore + " è pari")
  }
  else {
    console.log(contatore + " è dispari")
  }
}

//---------- Output sul Browser ---------------

function ob11() {
  let ob11Risultato = "";
  let ob11Vuoto = document.getElementById("ob11-vuoto");

  for (let contatore = 0; contatore <= 15; contatore = contatore + 1) {
    if (contatore % 2 === 0) {
      ob11Risultato += "<Div>" + contatore + " è Pari </Div>";
    }
    else {
      ob11Risultato += "<Div>" + contatore + " è Dispari </Div>";
    }
  }

  let ob11Output = ob11Risultato
  ob11Vuoto.innerHTML = ob11Output

}



//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num_1 = 10
let num_2 = 8

if (num_1 === 8) {
  console.log("Numero 1 = 8")
}
else if (num_2 === 8) {
  console.log("Numero 2 = 8")
}
else if (num_1 + num_2 === 8) {
  console.log("la somma dei due numeri è 8")
}
else if (num_1 - num_2 === 8 || num_2 - num_1 === 8) {
  console.log("la differenza tra i due numeri è 8")
}

//---------- Output sul Browser ---------------

function ex1() {

  let ex1Num1 = parseInt(document.getElementById('ex1Num1').value);
  let ex1Num2 = parseInt(document.getElementById('ex1Num2').value);
  let ex1Risultato;
  let ex1Vuoto = document.getElementById('ex1-vuoto');

  if (ex1Num1 + ex1Num2 === 8 && (ex1Num1 === 8 || ex1Num2 === 8)) {
    ex1Risultato = "la somma dei due numeri è 8<br>e uno dei due numero è 8"
  }
  else if ((ex1Num1 - ex1Num2 === 8 || ex1Num2 - ex1Num1 === 8) && (ex1Num1 === 8 || ex1Num2 === 8)) {
    ex1Risultato = "la differenza tra i due numeri è 8<br>e uno dei due numeri è 8"
  }
  else if (ex1Num1 === 8 && ex1Num2 === 8) {
    ex1Risultato = "Entrambi i numeri sono 8"
  }
  else if (ex1Num1 === 8) {
    ex1Risultato = "Il primo numero è 8";
  }
  else if (ex1Num2 === 8) {
    ex1Risultato = "Il secondo numero è 8"
  }
  else if (ex1Num1 + ex1Num2 === 8) {
    ex1Risultato = "la somma dei due numeri è 8"
  }
  else if (ex1Num1 - ex1Num2 === 8 || ex1Num2 - ex1Num1 === 8) {
    ex1Risultato = "la differenza tra i due numeri è 8"
  }
  else {
    ex1Risultato = "Nessun numero è 8"
  }


  let ex1Output = "<h1>" + ex1Risultato + "</h1>";


  ex1Vuoto.innerHTML = ex1Output;

}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let costo1 = 15
let costo2 = 10
let costo3 = 50

let totalShoppingCart = costo1 + costo2 + costo3

if (totalShoppingCart > 50) {
  console.log("Spenderai: " + totalShoppingCart + ". La spedizione è gratuita")
}
else {
  console.log("Spenderai: " + (totalShoppingCart + 10) + " (inclusi 10 per costi di spedizione)")
}

//---------- Output sul Browser ---------------

function ex2() {
  let ex2Costo1 = 15
  let ex2Costo2 = 10
  let ex2Costo3 = 2

  let total = ex2Costo1 + ex2Costo2 + ex2Costo3
  let ex2Risultato;
  let ex2Vuoto = document.getElementById("ex2-vuoto");
  let ex2InsCosto1 = document.getElementById("ex2InsCosto1");
  let ex2InsCosto2 = document.getElementById("ex2InsCosto2");
  let ex2InsCosto3 = document.getElementById("ex2InsCosto3");

  if (total > 50) {
    ex2Risultato = "<p>Spenderai: " + total + ".<br>La spedizione è gratuita</p>"
  }
  else {
    ex2Risultato = "<p>Spenderai: " + (total + 10) + "<br>(inclusi 10 per costi di spedizione)</p>"
  }

  let ex2Output = ex2Risultato
  ex2Vuoto.innerHTML = ex2Output
  ex2InsCosto1.innerHTML = "<p> Articolo 1: " + ex2Costo1 + "</p>"
  ex2InsCosto2.innerHTML = "<p> Articolo 2: " + ex2Costo2 + "</p>"
  ex2InsCosto3.innerHTML = "<p> Articolo 3: " + ex2Costo3 + "</p>"
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let spesa1 = 30
let spesa2 = 10
let spesa3 = 20

let totalShoppingCart1 = spesa1 + spesa2 + spesa3
let promozione = totalShoppingCart1 * 0.80
const spedizione = 10

if (promozione > 50) {
  console.log("Pagherai: " + promozione + " con il 20% di sconto. La spedizione è gratuita")
}
else {
  console.log("Ti è stato applicato il 20% di sconto. Pagherai: " + promozione + " + " + spedizione + " di spedizione, per un totale di: " + (promozione + spedizione))
}
//---------- Output sul Browser ---------------

function ex3() {
  let ex3Costo1 = 300
  let ex3Costo2 = 10
  let ex3Costo3 = 20

  let total = ex3Costo1 + ex3Costo2 + ex3Costo3
  let ex3Risultato;
  let promozione = total * 0.80

  const spedizione = 10

  let ex3Vuoto = document.getElementById("ex3-vuoto");
  let ex3InsCosto1 = document.getElementById("ex3InsCosto1");
  let ex3InsCosto2 = document.getElementById("ex3InsCosto2");
  let ex3InsCosto3 = document.getElementById("ex3InsCosto3");

  if (promozione > 50) {
    ex3Risultato = "<p>Hai diritto al 20% di sconto. Spenderai: " + promozione + " .<br>La spedizione è gratuita</p>"
  }
  else {
    ex3Risultato = "<p>Hai diritto al 20% di sconto. Spenderai: " + promozione + " + " + spedizione + " di spedizione, per un totale di: " + (promozione + spedizione) + "</p>"
  }

  let ex3Output = ex3Risultato
  ex3Vuoto.innerHTML = ex3Output
  ex3InsCosto1.innerHTML = "<p> Articolo 1: " + ex3Costo1 + "</p>"
  ex3InsCosto2.innerHTML = "<p> Articolo 2: " + ex3Costo2 + "</p>"
  ex3InsCosto3.innerHTML = "<p> Articolo 3: " + ex3Costo3 + "</p>"
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = true
let gender = isMale ? "male" : "female"
console.log(gender)


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console.
  Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz".
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let contatore = 1; contatore <= 100; contatore = contatore + 1) {
  if (contatore % 3 === 0 && contatore % 5 === 0) {
    console.log("FizzBuzz")
  }
  else if (contatore % 3 === 0) {
    console.log("Fizz")
  }
  else if (contatore % 5 === 0) {
    console.log("Buzz")
  }
  else {
    console.log(contatore)
  }
}

//---------- Output sul Browser ---------------

function ex5() {

  let ex5Risultato = ''
  let ex5Vuoto = document.getElementById("ex5Vuoto")

  for (let contatore = 1; contatore <= 100; contatore = contatore + 1) {
    if (contatore % 3 === 0 && contatore % 5 === 0) {
      ex5Risultato += "<div>FizzBuzz</div>"
    }
    else if (contatore % 3 === 0) {
      ex5Risultato += "<div>Fizz</div>"
    }
    else if (contatore % 5 === 0) {
      ex5Risultato += "<div>Buzz</div>"
    }
    else {
      ex5Risultato += "<div>" + contatore + "</div>"
    }
  }

  let ex5Output = ex5Risultato
  ex5Vuoto.innerHTML = ex5Output
}
