// Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.
function capturarValores() {
    let nome = document.getElementById("campoNome").value;
    let idade = document.getElementById("campoIdade").value;
    let mensagem = document.getElementById("mostraNome");
    mensagem.innerHTML = `Olá, ${nome}! Você tem ${idade} anos.`;
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}

// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.
let numero1 = 10;
let numero2 = 20;
let soma = numero1 + numero2;
console.log(`A soma de ${numero1} e ${numero2} é igual a ${soma}.`);

// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.
let texto = "Olá, meu nome é João; Eu tenho 20 anos.";
let textoSeparado = texto.split(";");
console.log(textoSeparado[0]);
console.log(textoSeparado[1]);

// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.
let numeros = "1, 2, 3, 4, 5";
let numerosSeparados = numeros.split(",");
console.log(numerosSeparados);