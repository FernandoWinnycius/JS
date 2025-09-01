var n1, n2, n3
n1=parseInt(prompt("Digite o primeiro termo: "))
n2=parseInt(prompt("Digite a razão: "))
n3=parseInt(prompt("Digite a quantidade de elementos: "))

for(var i=0; i < n3; i++)
{
    n1=n1+n2
    document.write("<h2>" + n1 + "</h2>")
}