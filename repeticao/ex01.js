var cont

cont=0

while(cont<10)
    {
    alert("Irritando o usúario com while " + cont + " vezes")
    cont++
    }

for(cont=0; cont<10; cont++)
{
    alert("Agora irritando com for " + cont + " vezes")
}

var resposta
do{
    resposta=confirm("Deseja continuar?")
}while(resposta==true)