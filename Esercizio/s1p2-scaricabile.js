/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 1; //number: sono numeri interi e decimali
let string = "Ciao"; //string: è una sequenza di caratteri
let boolean = true; //boolean: può avere solo due valori = true e false (1 e 0) 
let bigint = 129836198274628937462983564829736489723648972634018760n; //bigint: può contenere numeri di lunghezza maggiore
let noValue = null; //null: è un valore "nullo"
let z; //undefined: il valore della variabile non è definito
let object = {nome: "Simone", eta: 24, maggiorenne: true} //object: è un "contenitore" di attributi e valori
let s = Symbol(); //

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let obj = {nome: "Simone", eta: 24, maggiorenne: true} //object: è un "contenitore" di attributi (o proprietà) al quale andremo ad associare dei valori

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
z = 12;
let y = 20; 
let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/ 

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Simone";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
y = 4
let sottrazione = y - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John"; 

console.log(name1 == name2);
console.log(name1 == name2.toLowerCase());

/*
Crea un oggetto in Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

let meStesso = {nome: "Simone", cognome: "Tignino", hobby: "videogames"}