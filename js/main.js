$(document).ready(function() {
	$('#telefone').mask('(00) 00000-0000');
	$('#cep').mask('00000-000'); 
	$('#cpf').mask('000.000.000-00'); 
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: false
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Esse campo é obrigatório!',
            email: 'Esse campo é obrigatório!',
            telefone: 'Esse campo é obrigatório!',
            cpf: 'Esse campo é obrigatório!',
            cep: 'Esse campo é obrigatório!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos obrigatórios não preenchidos`)
            }
        }
    })
})