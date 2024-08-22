console.log('JS OK')

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. Chiediamo all'utente una parola
const userWord = prompt('Dammi una parola')

// Funzione:
// 1. Come la chiamo?
// 2. ho bisogno di paramentri?
// 3. ho bisogno di restituire un valore?
// 4. Se si, di che tipo?

function mirrorText(text){
    let reversedWord = '';

    for(let i = userWord.length - 1; i >= 0; i--  ){
        reversedWord += userWord.charAt(i);
    }

    if(userWord === reversedWord){
        return true;
    } else {
        return false;
    }
}

console.log(mirrorText())