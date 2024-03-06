// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, vi allego un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
// Come detto questa mattina nella creazione del form non utilizzate il tag <form> e per il tasto utilizzate il tag button. 

// 1 chiedere km nome e cognome ed età dell'utente 
console.log(document.querySelector('#generate-button'));
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    const userName = document.querySelector('#user-name').value;
    let userKm = parseInt(document.querySelector('#user-km').value);
    let userAge = document.querySelector('#user-age').value;
    console.log(userName)
    console.log(userKm)
    console.log(userAge)

    //    Price 
 let price = userKm * 0.21 ;
 console.log('price init',price)
 let priceRounded = price.toFixed(2) + '€';
 console.log(priceRounded)
    // eta scount
   
if(userAge === 'Anziano') {
    priceFinal = priceRounded - (priceRounded * 40 / 100);
    userTicket = 'Biglietto con il 40 % di sconto';
    randomStage = Math.floor(Math.random() * 100) + 1;
    console.log(randomStage)
    randomTicket = Math.floor(Math.random() * 10000) + 1;
} else if(userAge === 'minorenne'){
    priceFinal = priceRounded - (priceRounded * 20 / 100) ;
   userTicket = 'Biglietto con il 20 % di sconto';
   randomStage = Math.floor(Math.random() * 100) + 1;
    console.log(randomStage)
    randomTicket = Math.floor(Math.random() * 10000) + 1;
} else {
    userAge === 'Maggiorenne'
    priceFinal= priceRounded ;
     userTicket = 'Biglietto Standard';
    randomStage = Math.floor(Math.random() * 100) + 1;
    console.log(randomStage)
    randomTicket = Math.floor(Math.random() * 10000) + 1;
};



console.log('pricefinal',priceFinal)

// stampare 
const userMessageDiv = document.querySelector('#user-name-stamped');
userMessageDiv.innerHTML = userName;

const userTicketDiv = document.querySelector('#ticket-type');
userTicketDiv.innerHTML = userTicket;

const userRandomStageDiv = document.querySelector('#random-stage');
userRandomStageDiv.innerHTML = randomStage;

const userRandomTicketDiv = document.querySelector('#random-ticket');
userRandomTicketDiv.innerHTML = randomTicket;

const userPriceDiv = document.querySelector('#price-ticket');
userPriceDiv.innerHTML = priceFinal;

});


// bottone rimuovi 

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
   
    // campo input delet 
     document.querySelector('#user-name').value ='';
     document.querySelector('#user-km').value ='';
     document.querySelector('#user-age').value ='';
    
    // stampa delet 
    const userMessageDiv = document.querySelector('#user-name-stamped');
    userMessageDiv.innerHTML = '';

    const userTicketDiv = document.querySelector('#ticket-type');
    userTicketDiv.innerHTML = '';

    const userRandomStageDiv = document.querySelector('#random-stage');
    userRandomStageDiv.innerHTML = '';

    const userRandomTicketDiv = document.querySelector('#random-ticket');
    userRandomTicketDiv.innerHTML = '';

    const userPriceDiv = document.querySelector('#price-ticket');
    userPriceDiv.innerHTML = '';
   
});