//===============================================================
//site de idade para dirigir
alert("Boas vindas ao nosso site!");

//definindo variaveis
let nomeCadastrado = "ana";
let idadeCadastrada = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";

//perguntando dados ao usuario
nome = prompt("Digite seu nome: "); 
idade = prompt("Digite sua idade");

//estrutura condicional para comparacao de dados inseridos
//com os registrados
if (nome != nomeCadastrado || idadeCadastrada != idade) {
    alert(mensagemDeErro);
}
else {
    alert("Dados corretos com os armazenados.")
}

//estrutura condicional para verificar idade de habilitacao
if (idade > 17) {
    alert("Você pode tirar a habilitação!")
}

//===============================================================
//site para dia da semana
//definindo variaveis da semana
let finalSemana = "Bom final de semana!";
let diaUtil = "Boa semana!";

//perguntando ao usuario o dia desejado
dia = prompt("Digite o dia da semana: ");

//estrutura condicional para verificar dia ou util ou final de semana
if (dia == "sabado" || dia == "domingo") {
    alert(finalSemana)
}   else    {
    alert(diaUtil)
}


//===============================================================
//site para verificar se é positivo ou negativo
//perguntando ao usuario numero desejado
let numero = prompt("Digite um número:");

//estrutura condicional para verificar o numero informado
if (numero >= 0) {
    alert("o numero informado é positivo.")
}   else{
    alert("o numero informado é negativo.")
}


//===============================================================
//site para medir pontuacao de usuario
//perguntando ao usuario pontuacao
let pontuacao = prompt("Digite sua pontuação: ");

//estrutura condicional para verificar pontuação
if (pontuacao >= 100) {
    alert("Parabéns, você venceu!")
}   else    {
    alert("Tente novamente para ganhar.")
}


//===============================================================
//site para mostrar saldo da conta
//utilizando constante
const saldo = "R$ 100";
const saudacao = `Seu saldo é ${saldo}!`

//mostrando saldo
alert(saudacao);

//===============================================================
//site para dar boas vindas com nome do usuario
let nome = prompt("Digite seu nome:")
//mandando mensagem com o nome digitado do usuario
alert(`Bem vindo ${nome}!`)
