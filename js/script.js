/* 1 Chiedo all'utente di inserire una parola
2 Creo un array vuoto
3 Inserisco dentro l'array vuoto le lettere che compongono la parola
4 Creo un altro array vuoto
5 Inserisco dentro il secondo array vuoto le lettere che compongono la parola ma partendo dall'ultima
6 confronto i due array

   SE le parole corrispondono stampo: la parola è palindroma
   SE le parole non corrispondono stampo: la parola non è palindroma
*/

let word;

let outputResult = document.getElementById("output")

//Collego gli elementi html al javascript

let wordPali = document.getElementById("word-pali");

let sendPali = document.getElementById("send-pali");

//raccolgo il valore inserito dall'utente 

sendPali.addEventListener("click", function(){

    let word = document.getElementById('word-pali').value;

    //creo gli array della parola inserita

    const rightArray = Array.from(word);

    
    const reversedArray = rightArray.slice().reverse();
    
    console.log(rightArray)

    console.log(reversedArray)

    //decreto se la parola è un palindromo

    let rightWord = rightArray.toString();

    let reverseWord = reversedArray.toString();

    if (rightWord === reverseWord) {
        outputResult.innerHTML = "È una parola palindroma! :D";
    } else {
        outputResult.innerHTML = "Non è mai nella vita una parola palindroma! :(";
    }

});