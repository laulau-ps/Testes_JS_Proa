//Exemplo de Estrutura de Repetição Enquanto-While

let contadora = 0
let texto = " "

//enquanto 'contadora' valer menos que 10, faça:
while (contadora < 10) {

    // acrescenta na variavel 'texto', que antes estava vazia, o valor da 'contadora' e pula linha
    texto = texto + ("Laura") + "\n"

    // soma 'contadora' com ela mesma + 1
    contadora = contadora + 1
}
//exibe o valor atual que está no 'texto' dentro da tag no html
document.getElementById('demo').innerText = texto