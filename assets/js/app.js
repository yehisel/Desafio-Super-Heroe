
$(document).ready(function () {
   
    $('#btn-submit').on('click', function () {
        
        let heroe= $("#respuesta").val()
        
        const codigo = /^([0-9])*$/; 

        
        if (codigo.test(heroe) && parseInt(heroe) < 732 && parseInt(heroe) > 0) {
            CargarHeroe(heroe);
        } else {
            alert("Debe ingresar solo números (1-731)");
        }
    });

});
