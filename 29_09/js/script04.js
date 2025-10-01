//Solicita os valores atraves de uma caixa de alerta e armazena nas variaveis 

//parseInt converte a variavel por padrão de string para inteiro
var numero01 = parseInt(prompt("Digite o primeiro valor: "))
var numero02 = parseInt(prompt("Digite o segundo valor: "))

//Cria a variavel para realizar a operação
var multiplicacao = numero01 * numero02

//Cria uma caixa de alerta exibindo a saída de dados
alert(+numero01+" * "+numero02+" = "+multiplicacao)