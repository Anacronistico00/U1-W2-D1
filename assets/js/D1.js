/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
  I principali datatype in JavaScript sono 3:

  -String: valore di natura testuale, serve per 'stampare' a schermo delle parole o delle frasi.
           Deve essere inglobato in degli apici o doppi apici.

  -number: valore rigorosamente numerico. Serve per assegnare alla variabile un valore in numeri, anche decimali.
           Non deve essere inglobato negli apici, altrimenti diventerebbe un datatype di tipo string.

  -boolean: Valore Booleano, cioè vero o falso(1/0). Letteralmente indica se la variabile sia vera oppure falsa.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = 'Vittorio'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const number1 = 12;
const number2 = 20;

console.log(number1 + number2);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

  try { 
    myName = "Turiaci"; // Riassegnazione non consentita per una variabile `const`
  }
    catch (error) { 
      console.log("Errore durante la riassegnazione di myName:", error.message); 
    }


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const number3 = 4;
console.log(number3 - x);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = 'jhon';
const name2 = 'Jhon';

if (name1 == name2) {
  console.log(`${name1} e ${name2} sono uguali`);
} 
else {
  console.log(`${name1} e ${name2} sono diversi`);
  
}
 /* EXTRA */

if (name1 == name2.toLowerCase()) {
  console.log(`${name1} e ${name2} sono uguali`);

} 
else {
  console.log(`${name1} e ${name2} sono diversi`);
  
}
