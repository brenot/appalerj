function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function adjustIframes()
{
    $('iframe').each(function(){
        var
            $this       = $(this),
            proportion  = $this.data( 'proportion' ),
            w           = $this.attr('width'),
            actual_w    = $this.width();

        alert(proportion);

        if ( ! proportion )
        {
            proportion = $this.attr('height') / w;
            $this.data( 'proportion', proportion );
        }

        if ( actual_w != w )
        {
            $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
        }
    });
}

function bootAloAlerj() {
    $('#faleconosco-page').on('click', '#enviar', function(e) {

        var validacao = true;

        if ($('#nome').val() == ''){
            validacao = false;
        }

        if ($('#email').val() == ''){
            validacao = false;
        }

        if ($('#ddd').val() == ''){
            validacao = false;
        }

        if ($('#telefone').val() == ''){
            validacao = false;
        }

        if ($('#mensagem').val() == ''){
            validacao = false;
        }

        if (!validacao){
            alert('Por favor, preencha todos os campos para enviar a mensagem!');
        }else{


            if (!validateEmail($('#email').val())){
                alert('E-mail inválido!');
                return;

            }else{

                setTimeout(function(){
                    $.mobile.loading('show');
                },500);

                var data = 'Nome='+$('#nome').val()+'&Email='+$('#email').val()+'&Telefone='+$('#ddd').val()+'-'+$('#telefone').val()+'&Mensagem=' + $('#mensagem').val();

                app.actions.faleconosco(data);
            }

        }

    });

    $( "#faleconosco-page" ).on( "swiperight", function(){

        $( ":mobile-pagecontainer" ).pagecontainer( "change", "inicio.html", { role: "page", transition: 'slide', reverse: 'true' } );
    } );

    $('#ddd').keydown(function (e) {

        var inputLength = $(this).val().length;

        if(inputLength >= 2 && e.keyCode >= 48 && e.keyCode <= 57) {
            e.preventDefault();
            return false;
        }
    });

    $('#telefone').keydown(function (e) {

        var inputLength = $(this).val().length;

        if(inputLength >= 9 && e.keyCode >= 48 && e.keyCode <= 57) {
            e.preventDefault();
            return false;
        }
    });
}

$(window).on('resize load',adjustIframes);

bootAloAlerj();
