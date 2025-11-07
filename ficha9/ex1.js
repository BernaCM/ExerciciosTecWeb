let nome = prompt("Insira o Seu nome: ").toUpperCase().substring(0,3)
let aplido = prompt("Insira o Seu aplido: ").toUpperCase().substring(0,3)
let numero = prompt("Insira um numero de 0 a 100:")

alert(`O seu username é ${`${nome+aplido+numero}`}`)