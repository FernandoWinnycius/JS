var n

n=parseInt(prompt("Digite a quantidade de numeros pares que deseja exibir: "))

for(var i=0; i<=n; i=i+2)
{
    document.write("<h2>" + i + "</h2>")
}