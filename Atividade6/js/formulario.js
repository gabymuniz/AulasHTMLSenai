function imprimirNome() {
    window.alert("Usuario Cadastrado!")
    //window.prompt()

    let nome = document.getElementById("nome").value;

    let idade = document.getElementById("idade").value;

    let cargo = document.getElementById("cargo").value;

    let departamento = document.getElementById("departamento").value;

    let acessoRes = document.querySelector('input[name="acessoRestrito"]:checked')?.value;

    //FAZER OS CONSOLES.LOG DE TODOS OS DADOS
    console.log("Nome do colaborador: " + nome);
    console.log("Idade: " + idade);
    console.log("Cargo: " + cargo);
    console.log("Departamento: " + departamento);
    console.log("Acesso Restrito: " + acessoRes);

    alert("Colaborador cadastrado! Confira os dados: \n\nNome do colaborador: " + nome + ", Idade: " + idade + ", Cargo: " + cargo + ", Departamento: " + departamento + ", Acesso restrito? " + acessoRes)

}