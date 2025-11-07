function avaliacaoEscolar(){
    let nota = Math.floor(Math.random() * 21)

        if (nota >= 0 && nota <= 9) {
            alert(`A sua nota é ${nota} e é Negativa`);
        } else if (nota >= 10 && nota <= 13) {
            alert(`A sua nota é ${nota} e tem de ir a Prova Oral`)
        } else if (nota >= 14 && nota <= 17) {
            alert(`A sua nota é ${nota} e é Positiva`)
        } else if (nota >= 18 && nota <= 20) {
            alert(`A sua nota é ${nota} e é Excelente`)
        } else {
            console.log("Nota inválida");
        }
}


