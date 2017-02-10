var player;
var done = false;

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

function playTvAlerj() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var scriptTag = document.getElementsByTagName('script')[0];
    scriptTag.parentNode.insertBefore(tag, scriptTag);
}

function onYouTubeIframeAPIReady() {
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.

    player = new YT.Player('video-player', {
        height: '100%',
        width: '100%',
        videoId: 'e5iGB-228QA',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

$(window).on('resize load',adjustIframes);
