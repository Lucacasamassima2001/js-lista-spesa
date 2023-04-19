// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

let myarr = [
    "funghi",
    "carote",
    "zucchine",
    "pomodori",
    "latte",
    "mele",
]
const addbtn = document.querySelector(".add")
const itemslist = document.querySelector(".list")
let i = 0;
while( i < myarr.length) {
    console.log(myarr[i]);
    i++;
    itemslist.innerHTML += `<li>${myarr[i]}</li>`;
}

