var numPrimoFinal = 100;
var soma = 0;

for (var i = 2; i < numPrimoFinal; i++) {
    if (verificaPrimo(i)) {
        soma = soma + i;
        // console.log("------------Soma: " + soma);
    }

}


function verificaPrimo(entrada) {
    for (var n = 2; n < entrada; n++) {
        if ((entrada % n) === 0) {
            // console.log("Não Primo: " + entrada)
            return false;
        }
    }
    console.log("Número Primo: " + entrada)
    return true;
}

console.log("Soma dos números primos: " + soma);