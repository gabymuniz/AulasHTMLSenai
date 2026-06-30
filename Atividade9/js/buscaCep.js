function buscarCep() {

    let cepDigitado = document.getElementById("cep").value;

    const cep = cepDigitado;

    const cepCorreto = cep.replace(/-/g, ""); // faz com que todas as vezes que aparecer um -, o texto seja substituido por "";

    console.log(cepCorreto);

    if (cepCorreto === "" || cepCorreto.length !== 8) {

        window.alert("CEP INVÁLIDO!!");
        return;
        
    }
    
    fetch(`https://viacep.com.br/ws/${cepCorreto}/json/`)

        .then(function (resposta) {

            return resposta.json();

        })

        .then(function (dados) {

            if (dados.erro) {
                alert("CEP não encontrado!")
            }

            document.getElementById("rua").value = dados.logradouro;

            document.getElementById("bairro").value = dados.bairro;

            document.getElementById("cidade").value = dados.localidade;

            document.getElementById("uf").value = dados.uf;



        })
        .catch(function (erro) {
            console.log("Erro:", erro);
        })
}

const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarCep)





