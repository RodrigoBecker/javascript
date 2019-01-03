
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // previne o comportamento default do objeto neste caso o carregamento da pagina devido o botão estar dentro de uma tag form
    //qconsole.log("Oi eu sou o botão")
    var form = document.querySelector("#form-adiciona");



    // Extrai informações do form para adicionar um novo paciente
    var paciente = obtemPaciente(form);


    console.log(paciente);


    // variavel que recebe dados da função 
    var pacienteTr = montaTr(paciente);

    //Adicionando o paciente na tabela 
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});


function obtemPaciente(form) {

    //objeto paciente
    var Paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)

    }


    /*
    var nome = form.nome.value; // resgatando do objeto form o valor do input atraves da propriedade .peso.value
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    */

    return Paciente;

}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr"); // utilizando a função createElement para construir elementos html através do javascript
    pacienteTr.classList.add("paciente");


    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");



    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr;
}

function montaTd (dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}