/*alert("Olá Mundo!")
    var titulo = (document.querySelector(".titulo")); // Buscando elemento pela sua classe 
    var subtitulo = (document.querySelector("#subtitulo")); // Buscando elemento pelo sey id 
	console.log(titulo);
    console.log(titulo.textContent); 
    console.log(subtitulo.textContent);
*/

var paciente = document.querySelector("#primeiro-paciente");


// Peso
var tdPeso =  paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

// Altura
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


/*
console.log(paciente); // tr peso
console.log(tdPeso); // td com o peso 
console.log(peso); // Obtem o valor do peso 
console.log(altura) // Obtem altura
*/

var imc = peso / (altura * altura); //Calculo de javascript usando ordem de Precedência 
//console.log(imc); // imprime resultado 

var tdimc = paciente.querySelector(".info-imc");



var pesoValido = true;
var alturaValido = true;

if (peso < 0 || peso >1000){ // validando peso
    console.log("Peso Invalido");
    tdimc.textContent = "Peso invalido";
    pesoValido = false;
} 

if (altura < 0 || altura >3.00){ // validando altura
    console.log("Altura invalida");
    alturaValido = false;
    tdimc.textContent = "Altura invalida";

}


if (pesoValido && alturaValido){ 
    tdimc.textContent = imc;
}

