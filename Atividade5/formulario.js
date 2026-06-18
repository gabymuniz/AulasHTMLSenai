function imprimirNome(){
    window.alert("Usuario Cadastrado!")
    //window.prompt()

    let nome = document.getElementById("nome").value;

    let idade = document.getElementById("idade").value;

    let cargo = document.getElementById("cargo").value;

    let departamento = document.getElementById("departamento").value;

    let acessoRes = document.getElementById("acessoRestrito").value;

    //FAZER OS CONSOLES.LOG DE TODOS OS DADOS
   

    alert("Colaborador cadastrado! Confira os dados: \n\nNome do colaborador: " + nome + ", Idade: " + idade + ", Cargo: " + cargo + ", Departamento: " + departamento + ", Acesso restrito? " + acessoRes)

}