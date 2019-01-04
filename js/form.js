
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // previne o comportamento default do objeto neste caso o carregamento da pagina devido o botão estar dentro de uma tag form
    //qconsole.log("Oi eu sou o botão")
    var form = document.querySelector("#form-adiciona");
    // Extrai informações do form para adicionar um novo paciente
    var paciente = obtemPaciente(form);
    // variavel que recebe dados da função 
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);


    console.log(erros)

    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }


    /*
    
        if(!validaPaciente(paciente)){
            console.log("Paciente Invalido");
            alert("Peso Inválido!");
            return;
        } if(!validaAltura(paciente)){
            console.log("Paciente Invalido")
            alert("Altura Inválida");
            return;
        }
    */

    //Adicionando o paciente na tabela 
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset(); // limpa os dados do formulário
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

});


function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function (erros) {
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li);
    });
}



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
    //var pesoTd = montaTd(paciente.peso, "info-peso");
    //var alturaTd = montaTd(paciente.altura, "info-altura");
    //var alturaTd = montaTd(paciente.altura, "info-altura");
    //var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    //var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];


    // 1 forma reduzida de declarar if  

    if (paciente.nome.length == 0) {
        erros.push("O nome do paciente não pode ser em branco!");
    }

    if (!validaPeso(paciente.peso)) erros.push("***Peso Inválido!***");
    if (!validaAltura(paciente.altura)) erros.push("***Altura Inválida!***");

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser um valor em branco!")
    }


    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser um valor em branco!");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser um valor em branco!");
    }
    /* 2 forma de declarar if
    
        if (!validaPeso(paciente.peso)) {
            erros.push("***Peso Inválido!***");
        } 
        if (!validaAltura(paciente.altura)) {
            erros.push("***Altura Inválida!***");
        }
    
    */
    return erros;
}

/*

   if(validaAltura(paciente.altura)){
        return true;
    }else {
        return false;
    }
}
*/
