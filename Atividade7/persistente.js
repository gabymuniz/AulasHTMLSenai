function salvarNome(){
    let valorDigitado = document.getElementById("texto-inserido").value;
    let idadeDigitado = document.getElementById("idade-inserido").value;

    let objetoPessoa = {
        nome: valorDigitado,
        idade: idadeDigitado
    };
    
    let textoJSON = JSON.stringify(objetoPessoa)
    localStorage.setItem("dadoNome",textoJSON)

    document.getElementById("nome-salvo").innerText = valorDigitado;
    document.getElementById("idade-salvo").innerText = idadeDigitado;
}