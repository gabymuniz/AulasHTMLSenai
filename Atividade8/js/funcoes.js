/*
   Histórico de função utilizada
   Histórico dos números digitados
   Histórico dos resultados obtidos

   Salva no localStorage.
*/

function soma() {
    let funcao = "Soma";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiro_numero) + Number(segundo_numero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function subtracao() {
    let funcao = "Subtração";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiro_numero) - Number(segundo_numero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function multiplicacao() {
    let funcao = "Multiplicação";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiro_numero) * Number(segundo_numero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function divisao() {
    let funcao = "Divisão";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;

    if (Number(segundo_numero) === 0) {
        alert("Não é possível dividir por zero.");
        return;
    }

    let resultado = Number(primeiro_numero) / Number(segundo_numero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {

    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro número: " + num1);
    console.log("Segundo número: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];

    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}

function mostrarHistorico() {

    let historico = JSON.parse(localStorage.getItem("historicoCalculos")) || [];

    console.log("===== HISTÓRICO =====");

    if (historico.length === 0) {
        console.log("Nenhum cálculo foi realizado.");
        return;
    }

    historico.forEach((item, indice) => {
        console.log(
            `${indice + 1}. ${item.funcao}: ${item.numero1} e ${item.numero2} = ${item.resultado}`
        );
    });
}

function apagarLocalStorage() {

    let confirmaApagar = confirm("Deseja apagar o histórico?");

    if (confirmaApagar) {
        localStorage.removeItem("historicoCalculos");
        localStorage.removeItem("historicoImposto");
        console.log("Histórico apagado.");
    }
}

function calculoImposto() {

    let valorInicial = document.getElementById("valor-inicial").value;
    let valorNum = Number(valorInicial);

    let valorComImposto;

    if (valorNum <= 50) {
        valorComImposto = valorNum + (valorNum * 0.20);
    } else {
        let primeiraTaxa = valorNum + (valorNum * 0.20);
        valorComImposto = primeiraTaxa + (primeiraTaxa * 0.90);
    }

    document.getElementById("resultado-imposto").innerText = valorComImposto;

    salvarHistoricoImposto(valorInicial, valorComImposto);
}

function salvarHistoricoImposto(valorInicial, valorComImposto) {

    console.log("Valor inicial: " + valorInicial);
    console.log("Valor com imposto: " + valorComImposto);
    console.log("--------------------------------");

    let operacao = {
        valorInicial: valorInicial,
        valorComImposto: valorComImposto
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoImposto")) || [];

    historicoLocal.push(operacao);

    localStorage.setItem("historicoImposto", JSON.stringify(historicoLocal));
}