console.log('JS OK')

// Versione non BONUS

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userNumber = prompt(parseInt)('Dammi un numero da 1 a 5')
const userChoice = prompt('Pari o Dispari')

// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

function getRandonNumber(min = 1, max = 5, isMaxIncluded = true){
    if(isNaN(min) || isNaN(max)){
        console.error('min e max devono essere numeri');
        return NaN;
    }

    if(min >= max ){
        console.error('min non può essere maggiore di max')
        return null;
    }

    if(isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min) + min);
}

const addNumber = userNumber + getRandonNumber();

