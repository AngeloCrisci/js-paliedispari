console.log('JS OK')

// Versione non BONUS

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userNumber = prompt('Dammi un numero da 1 a 5')
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

// Sommiamo i due numeri

const addNumber = userNumber + getRandonNumber();

// Stabiliamo se la somma dei due numeri è pari o dispari

function isEven(number){
    if(number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const result = isEven(addNumber);
console.log(result)

if(userChoice === 'Pari'){
    if(result = true){
        console.log('Hai vinto')
    } else {
        console.log('Hai perso')
    }
if(userChoice === 'Dispari'){
    if(result = true){
        console.log('Hai perso')
    } else {
        console.log('Hai vinto')
    }
}
        

}