/*Faça um programa para calcular valor gasto de combustível em uma viagem

Você terá três variáveis:
    1 - Preço do combustível;
    2 - Gasto médio do carro por KM  
    3 - Distância em KM da viagem

Imprima o valor que será gasto em combustível para realizar a viagem

*/
console.log('Exercício Aula 1 - Bootcamp Dio - OrangeTech')

console.log('Olá, vamos ver quanto vai custar sua viagem?');

const rendimentoVeiculo = 10;
const distanciaPercorridaa = 100 
const precoCombustivel = 5.79;

const litrosConsumidos = distanciaPercorridaa / rendimentoVeiculo

const gastoNaViagem = litrosConsumidos * precoCombustivel;

console.log('Sua viagem custou');
console.log(gastoNaViagem.toFixed(2));


/*INCREMENTO DA ATIVIDADE COM A SEGUNDA AULA: ESTRUTURAS CONDICIONAIS
Faça um programa para calcular valor gasto de combustível em uma viagem

Você terá cico variáveis:
    1 - Preço do etanol;
    2 - Preço gasolina
    3 - O tipo do combustível que está no seu carro;  
    4 - Gasto médio do combustível do carro
    5 - Distância em KM da viagem

Imprima o valor que será gasto em combustível para realizar a viagem

*/
console.log('Exercício Aula 2 - Bootcamp Dio - OrangeTech')

const rendimentoVeiculoGasolina = 10;
const rendimentoVeiculoEtanol = 15
const distanciaPercorrida = 100 
const precoGasolina = 5.79;
const precoEtanol = 4.49;

let tipoDeCombustivelNoCarro = 'Gasolina';

    if (tipoDeCombustivelNoCarro === 'Gasolina') {
        const litrosConsumidos = distanciaPercorrida / rendimentoVeiculoGasolina
        const gastoNaViagem = litrosConsumidos * precoGasolina
    console.log('Na Gasolina', gastoNaViagem.toFixed(2));
}else{
    const litrosConsumidos = distanciaPercorrida / rendimentoVeiculoEtanol
    const gastoNaViagem = litrosConsumidos * precoEtanol   

    console.log('No Etanol', gastoNaViagem.toFixed(2))
}

/* Praticando, lista de exercícios:
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua 
classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menos que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre
*/

console.log('Lista de Exercícios Aula 3: Ex. 1 - Bootcamp Dio - OrangeTech')

let nota1 = 3 ;
let nota2 = 2 ;
let nota3 = 7 ;
const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal < 5) {
    console.log('Reprovado');
    }else if (mediaFinal >= 7) {
        console.log('Passou de Semestre');
    }else{
        console.log('Recuperação');
    }
    /* Praticando, lista de exercícios:
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua 
classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menos que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre
*/

console.log('Lista de Exercícios Aula 3: Ex. 2 - Bootcamp Dio - OrangeTech')

/* Ex. 2:
O IMC - Indice de Massa Corporal é um critério da Organização Mundial da 
Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua
condição de acordo com a tabela abaixo:

IMC em adultos Condição:
- Abaixo do 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso Normal;
- Entre 25 e 30 = Acioma do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade Grave
*/

let peso = 60 ;
let altura = 1.70   
const imc = peso / Math.pow(altura,2)

if (imc < 18.5){
    console.log('Abaixo do peso')
}else if (imc >= 18.5 && imc <= 25){
        console.log('Peso normal')
}else if(imc > 25 && imc <= 30){
        console.log('Acima do peso') 
} else if (imc > 30 && imc <= 40) {
        console.log('Obeso') 
}else{
    console.log('Obesidade grave')
}

/* Ex. 3:
Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerado o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
escolhida e efetuar o calculo  adequado

Codigo Condição de pagamento:

- A vista Debito : recebe 10% de desconto;
- A vista no Dinheiro ou PIX : recebe 15% de desconto;
- Em duas vezes : preço normal de etiqueta sem juros;
- Acima de duas vezes : preço normal de etiqueta mais juros de 10%
*/

console.log('Lista de Exercícios Aula 3: Ex. 3 - Bootcamp Dio - OrangeTech')

let PrecoProduto = 100
let FormaDePagamento = 'Parcelado'
let QuantidadeParcela = 2

const DescontoSeDebito = 0.1
const DescontoNoDinheiro = 0.15
const JurosAcimaDeDuasVezes = 0.1

const ValorDescontoDebito = PrecoProduto * DescontoSeDebito
const ValorProdutoDebito = PrecoProduto - ValorDescontoDebito

const ValorDescontoDinheiroOuPix = PrecoProduto * DescontoNoDinheiro
const ValorProdutoDinheiroOuPix = PrecoProduto - ValorDescontoDinheiroOuPix

const ValorDosJuros = PrecoProduto * JurosAcimaDeDuasVezes
const ValorProdutoComJuros = PrecoProduto + ValorDosJuros

if (FormaDePagamento === 'Dinheiro'){
    console.log(ValorProdutoDinheiroOuPix)

} else if (FormaDePagamento = 'Parcelado' && QuantidadeParcela >2){
    console.log (ValorProdutoComJuros)

} else if (FormaDePagamento === 'Débito'){
    console.log (ValorProdutoDebito)

}else {(FormaDePagamento = 'Parcelado' && QuantidadeParcela <=2)
    console.log (PrecoProduto)
}
 
let nomeDoAluno = 'Renan'
console.log(nomeDoAluno);
nomeDoAluno = 'Vitor'
console.log(nomeDoAluno)

