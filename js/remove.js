var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
// 1 º Forma
    //var alvoEvento = event.target;
    //var paiAlvo = alvoEvento.parentNode;
    //paiAlvo.remove();

// 2º Forma 
    event.target.parentNode.remove();


});




/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function (){
        //console.log("fui clicado com duplo click")
        this.remove(); // this faz referencia com quem foi clicado
    });

});

*/


