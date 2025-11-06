let primo = prompt("insira um numero: ")

let divisor=0

for(i=1;i<=primo;i++){
    if(primo%i==0){
     divisor++
    }
} 
if(divisor==2){
    alert("é primo")
}else{
    alert("nao é primo")
}