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

/*Pari o dispari

1 chiediamo all'utente di scegliere fra pari o dispari
2 chiediamo all'utente di scegliere un numero compreso tra 1 e 5 
3 generiamo un numero random per il pc da 1 a 5
4 sommiamo i due numeri
5 stabiliamo se la somma è pari o dispari
6 decretiamo il vincitore
*/

//collego a javascript gli elementi html

let oddChoose = document.getElementById("odd");

let evenChoose = document.getElementById("even");

let sendNumber = document.getElementById("send-number");

let userNumberSection = document.getElementById("user-number")

let userChoose;

//creo funzionamento se l'utente ha scelto pari

evenChoose.addEventListener("click", function(){

    oddChoose.style.display = "none";

    evenChoose.style.display = "none";

    userNumberSection.style.display = "flex";

    userChoose = "even";

});

//creo funzionamento se l'utente ha scelto dispari

oddChoose.addEventListener("click", function(){

    evenChoose.style.display = "none";

    oddChoose.style.display = "none";

    userNumberSection.style.display = "flex";

    userChoose = "odd";

});

//creo raccolta numero utente

sendNumber.addEventListener("click", function(){

    let chooseNumber = document.getElementById("choose-number").value;
    
    if(chooseNumber < 1 || chooseNumber > 5) {
        alert("Scegli un numero compreso fra 1 e 5")
    } else {
        userNumberSection.style.display = "none";
    }
    

});