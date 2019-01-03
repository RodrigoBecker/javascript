var titulo = (document.querySelector(".titulo")); // Buscando elemento pela sua classe 


/*alert("Olá Mundo!")
    var subtitulo = (document.querySelector("#subtitulo")); // Buscando elemento pelo sey id 
	console.log(titulo);
    console.log(titulo.textContent); 
    console.log(subtitulo.textContent);
*/




var paciente = document.querySelectorAll(".paciente");



for (var i = 0; i < paciente.length; i++) {

    // console.log(paciente[i])

    var pacientes = paciente[i];


    // Peso
    var tdPeso = pacientes.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // Altura
    var tdAltura = pacientes.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    /*
    console.log(paciente); // tr peso
    console.log(tdPeso); // td com o peso 
    console.log(peso); // Obtem o valor do peso 
    console.log(altura) // Obtem altura
    */

    var imc = peso / (altura * altura); //Calculo de javascript usando ordem de Precedência 
    //console.log(imc); // imprime resultado 

    var tdimc = pacientes.querySelector(".info-imc");



    var pesoValido = true;
    var alturaValido = true;

    if (peso < 0 || peso > 1000) { // validando peso
        //console.log("Peso Invalido");
        tdimc.textContent = "Peso invalido";
        pesoValido = false;
        pacientes.classList.add("paciente-invalido")
    }

    if (altura < 0 || altura > 3.00) { // validando altura
        //console.log("Altura invalida");
        alturaValido = false;
        tdimc.textContent = "Altura invalida";
        pacientes.style.backgroundColor = "orange" // manipulando o estilo css com o javascript, utilizando o CamelCase

    }


    if (pesoValido && alturaValido) {
        tdimc.textContent = imc.toFixed(2);
    }

}

/* Exemplo função Nomeada
titulo.addEventListener("click", mostraMensagem()); 

function mostraMensagem(){
    console.log("Função nomeada");
}


titulo.addEventListener("click",function(){
    console.log("Função Anonima");
});

*/


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



})

