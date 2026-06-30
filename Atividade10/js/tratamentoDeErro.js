function tratamentoDeErro() {

    try{
        //Estamos executando uma função
        console.log("Iniciando meu bloco Try")

        //Declaramos uma função falsa para ter um erro proposital
        funcaoNaoDefinida()

        console.log("Essa linha não vai ser executada")
    } catch (error){
        console.error("Erro encontrado", error.message)
    }
}

function tratamentoDeErroGenerico() {

}

function tratamentoDeErroEspecifico() {
    try {
        let idade = -10;

        if (idade < 0) {
            throw new Error("Idade inválida! Não pode ter uma idade menor que 0!");
        } else{
            throw new Error("Idade inválida! Menor que 18 anos");
        }

    } catch(error){
        console.log("Erro ao cadastrar: ", error.message)
    }
}