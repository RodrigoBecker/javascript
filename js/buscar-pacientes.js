var botaoAdiciona = document.querySelector("#buscar-pacientes");

botaoAdiciona.addEventListener("click", function () {
    console.log("Buscando Paciente");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        console.log(resposta);

        if (xhr.status == 200) {
            console.log("Conexao bem sucedida!");
            BadRest.classList.add("invisivel")
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function (pacientes) {
                adicionaPacienteTabela(pacientes);
            });
        } else {
            console.log(xhr.response);
            console.log(xhr.status);
            var BadRest = document.querySelector("#erro-ajax");
            BadRest.classList.remove();
        }


    });

    xhr.send();
});