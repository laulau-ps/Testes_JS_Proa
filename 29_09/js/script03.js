//Solicita os valores atraves de uma caixa de alerta e armazena nas variaveis 

//parseFloat converte a variavel por padrão de string para float (real)
var numero01 = parseFloat(prompt("Digite o primeiro valor: "))
var numero02 = parseFloat(prompt("Digite o segundo valor: "))

//Cria a variavel para realizar a operação
var divisao = numero01 / numero02

//Cria uma caixa de alerta exibindo a saída de dados
alert(+numero01+" / "+numero02+" = "+divisao)