let i = 0;
do {
    console.log(i);
    i++
} while (i <= 5);

const frutas = ['maça', 'banana', 'Laranja', 'Pera', 'Melancia']
let j = 0
do {
    console.log('Eu gosto de' + frutas[j]);
    j++;
} while (j < frutas.lenght);

let k = 0;
do {
    if (k === 5){
        break;
    }
    console.log(k);
    k++;
} while (k < 10);