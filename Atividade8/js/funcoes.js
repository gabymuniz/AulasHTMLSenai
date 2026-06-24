/*
   Historico de função utilizada Ex-> Função Soma
   Histórico de numeros digitados Ex -> PrimeiroNumero: 10, SegundoNumero: 34
   Histórico de resultados obtidos: Ex -> 44

   apresentando num console.log

   criar funções de subtração, multiplicação e divisão.
   Modificar a função de salvarHistorico, para salvar em localStorage.
   */


function soma() {
    let funcao = "Soma";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiro_numero) + Number(segundo_numero);
    document.getElementById("resultado").innerText = resultado

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function multiplicacao() {
    let funcao = "Multiplicação";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiro_numero) * Number(segundo_numero);
    document.getElementById("resultado").innerText = resultado

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function subtracao() {
    let funcao = "Subtração";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiro_numero) - Number(segundo_numero);
    document.getElementById("resultado").innerText = resultado

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function divisao() {
    let funcao = "Divisão";
    let primeiro_numero = document.getElementById("primeiro-numero").value;
    let segundo_numero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiro_numero) / Number(segundo_numero);
    document.getElementById("resultado").innerText = resultado

    salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado);
}

function salvarHistorico(funcao, primeiro_numero, segundo_numero, resultado) {

    console.log("Função utilizada: ", funcao);
    console.log("Primeiro número: " + primeiro_numero);
    console.log("Segundo número: " + segundo_numero);
    console.log("Resultado: " + resultado);
}
