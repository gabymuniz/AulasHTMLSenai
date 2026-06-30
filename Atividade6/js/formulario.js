function imprimirNome() {
    window.alert("Usuario Cadastrado!")
    //window.prompt()

    let nome = document.getElementById("nome").value;

    let idade = document.getElementById("idade").value;

    let cargo = document.getElementById("cargo").value;

    let departamento = document.getElementById("departamento").value;

    let temAcessoRestrito = document.getElementById("temAcessoRestrito").checked; // Retorna true ou false

    //FAZER OS CONSOLES.LOG DE TODOS OS DADOS
    console.log("Nome do colaborador: " + nome);
    console.log("Idade: " + idade);
    console.log("Cargo: " + cargo);
    console.log("Departamento: " + departamento);
    console.log("Acesso Restrito: " + temAcessoRestrito);

    window.alert(
        "Cadastro finalizado com sucesso!\n\n" +
        "DADOS DO CRACHÁ:\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + "\n" +
        "Departamento: " + departamento + "\n" +
        "Acesso Restrito: " + temAcessoRestrito
    );
console.log("Acesso restrito:", temAcessoRestrito);
    if (temAcessoRestrito) { /// se (verdadeiro)
       window.alert("Indo para gerente");
        window.location.href = "gerente.html";
    } else {
        window.location.href = "funcionario.html";
    }
}