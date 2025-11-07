let nome1 = prompt("Insira o primeiro nome: ")
let nome2 = prompt("Insira o segundo nome: ")
let nome3 = prompt("Insira o terceiro nome: ")

let nomes = []

nomes.push(nome1, nome2, nome3)
nomes.sort()

alert(`${nomes[0]}, ${nomes[1]} e ${nomes[2]} `)

