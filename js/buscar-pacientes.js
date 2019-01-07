var botaoAdiciona = document.querySelector("#buscar-pacientes");

botaoAdiciona.addEventListener("click", function () {
    console.log ("Buscando Paciente");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        console.log(resposta);


        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);
    });

    xhr.send();
});