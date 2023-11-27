const listaZucchine = [
    {kind: 'tipo 1', peso: 10, lunghezza: 4},
    {kind: 'tipo 2', peso: 13, lunghezza: 16},
    {kind: 'tipo 3', peso: 4, lunghezza: 23},
    {kind: 'tipo 4', peso: 11, lunghezza: 6},
    {kind: 'tipo 5', peso: 2, lunghezza: 17},
    {kind: 'tipo 6', peso: 5, lunghezza: 10},
    {kind: 'tipo 7', peso: 7, lunghezza: 9},
    {kind: 'tipo 8', peso: 3, lunghezza: 8},
    {kind: 'tipo 9', peso: 6, lunghezza: 27},
    {kind: 'tipo 4', peso: 14, lunghezza: 4},
    {kind: 'tipo 2', peso: 20, lunghezza: 20},

];

let totalSum = 0;

for (let i = 0 ; i < listaZucchine.length ; i++){
    const zucchine = listaZucchine[i];

    totalSum = totalSum + listaZucchine[i].peso;

    console.log(zucchine);
}

console.log(totalSum);
