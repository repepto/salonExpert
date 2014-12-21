var maxW=0

$(window).load(function () {
    $('#pre_loader').fadeOut('slow')

    $('.wdt53').find('img').each(function(indx, element){
        if(maxW<$(element).width())
        {
            maxW=$(element).width()
        }
    });
    res();
});

$(window).resize(function()
{
    res();
});

function res(){

    w = $(window).width();

    wl=w*53/100+'px'
    wr=w*47/100+'px'

    if(parseFloat(wl)<maxW+120)
    {
        if(w-(maxW+120)>300)
        {
            $('.wdt53').css({'width':(maxW + 120) + 'px'})
            $('.wdt47').css({'width':(w-(maxW+120)) + 'px'})
        }
        else
        {
            $('.wdt53').css({'width':'100%'})
            $('.wdt47').css({'width':'100%'})
        }
    }
    else
    {
        $('.wdt53').css({'width':wl})
        $('.wdt47').css({'width':wr})
    }
}