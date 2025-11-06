let numeroPC = Math.floor(Math.random() * 10) + 1; // número aleatório entre 1 e 10
let numeroUtilizador;

while (numeroUtilizador != numeroPC) {
    numeroUtilizador = prompt("Adivinhe o número (entre 1 e 10):");

    if (numeroUtilizador == numeroPC) {
        alert("Acertou!");
    } else {
        alert("Tente novamente!");
    }
}


