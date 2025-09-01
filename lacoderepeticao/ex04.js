var n

n=parseInt(prompt("Digite a quantidade de numeros ímpares que deseja exibir: "))

for(var i=1; i<=n; i=i+2)
{
    document.write("<h2>" + i + "</h2>")
}