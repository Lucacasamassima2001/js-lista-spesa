// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

let myarr = [
    "funghi",
    "carote",
    "zucchine",
    "pomodori",
    "latte",
    "mele",
]

// CICLO WHILE PER STAMPARE GLI ELEMENTI DELL'ARRAY

const itemslist = document.querySelector(".list")
let i = 0;
while( i < myarr.length) {
    console.log(myarr[i]);
    itemslist.innerHTML += `<li>${myarr[i]}</li>`;
    i++;
}

const addbtn = document.querySelector(".add")

// AGGIUNGI ELEMENTI CON BOTTONE

addbtn.addEventListener("click", 

function(){
    let itemslist = document.querySelector(".list")
    let inputitem = document.querySelector(".item").value;  
    
    console.log(inputitem)
    myarr.push(inputitem)
    console.log(myarr)
    itemslist.innerHTML += `<li>${[inputitem]}</li>`;
    }
)
