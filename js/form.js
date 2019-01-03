
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // previne o comportamento default do objeto neste caso o carregamento da pagina devido o botão estar dentro de uma tag form
    //qconsole.log("Oi eu sou o botão")
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value; // resgatando do objeto form o valor do input atraves da propriedade .peso.value
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
     //console.log(form.altura.value);

     var pacienteTr = document.createElement("tr"); // utilizando a função createElement para construir elementos html através do javascript
     
     var nomeTd = document.createElement("td");
     var pesoTd = document.createElement("td");
     var alturaTd = document.createElement("td");
     var gorduraTd = document.createElement("td");
     var imcTd = document.createElement("td");
     
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});