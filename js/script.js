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

    for (var i = 0; i < reversedArray.length; ++i) {
        if (rightArray[i] == reversedArray[i]){
        console.log("È una parola palindroma!");
      } else {
        console.log("Non è mai nella vita una parola palindroma :(")
      }

    }

});