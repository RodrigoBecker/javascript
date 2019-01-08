var CampoFiltro = document.querySelector("#filtrar-tabela");
//console.log(CampoFiltro);

CampoFiltro.addEventListener("input", function () {
    //console.log("Estou digitando");
    //console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");


    if (this.value.length > 0) {
        console.log("Tem algo digitado");

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var TdNome = paciente.querySelector(".info-nome");
            var nome = TdNome.textContent;
            var Expressao = new RegExp(this.value, "i")
            //console.log(nome);
            if (!Expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel")
            }

        }


    } else {
        for(var i = 0 ; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }




});



