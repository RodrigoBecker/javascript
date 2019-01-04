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



    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if (!pesoValido) { // validando peso
        //console.log("Peso Invalido");
        tdimc.textContent = "Peso invalido";
        pesoValido = false;
        pacientes.classList.add("paciente-invalido")
    }

    if (!alturaValido) { // validando altura // TRUE E FALSE
        //console.log("Altura invalida");
        alturaValido = false;
        tdimc.textContent = "Altura invalida";
        pacientes.style.backgroundColor = "orange" // manipulando o estilo css com o javascript, utilizando o CamelCase

    }


    if (pesoValido && alturaValido) {

        var imc = calculaIMC(peso, altura);
        tdimc.textContent = imc;
    }

}


function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}


function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
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


